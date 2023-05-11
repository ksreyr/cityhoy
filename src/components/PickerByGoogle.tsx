import * as React from 'react';
import {Dispatch} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import {debounce} from '@mui/material/utils';
import {Property} from "csstype";
import {LocationState} from "@/components/post/PostCreation";

// This key was created specifically for the demo in mui.com.
// You need to create a new one for your application.
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS;

function loadScript(src: string, position: HTMLElement | null, id: string) {
    if (!position) {
        return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const autocompleteService = {current: null};

interface MainTextMatchedSubstrings {
    offset: number;
    length: number;
}

interface StructuredFormatting {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings?: readonly MainTextMatchedSubstrings[];
}

interface PlaceType {
    description: string;
    structured_formatting: StructuredFormatting;
}

export default function PickerByGoogle({setLocationState}: { setLocationState: Dispatch<LocationState>}) {
    const [value, setValue] = React.useState<PlaceType | null>(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState<readonly PlaceType[]>([]);
    const loaded = React.useRef(false);

    if (typeof window !== 'undefined' && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS}&libraries=places`,
                document.querySelector('head'),
                'google-maps',
            );
        }
        loaded.current = true;
    }

    const fetch = React.useMemo(
        () =>
            debounce(
                (
                    request: { input: string, types: string[] },
                    callback: (results?: readonly PlaceType[]) => void,
                ) => {
                    if (request.input.length >= 3) {
                        (autocompleteService.current as any).getPlacePredictions(
                            request,
                            callback,
                        );
                    }
                },
                400,
            ),
        [],
    );

    React.useEffect(() => {
        let active = true;

        if (!autocompleteService.current && (window as any).google) {
            autocompleteService.current = new (
                window as any
            ).google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch(
            {
                input: inputValue,
                types: ["(cities)"]
            },
            (results?: readonly PlaceType[]) => {
                if (active) {
                    let newOptions: readonly PlaceType[] = [];

                    if (value) {
                        newOptions = [value];
                    }

                    if (results) {
                        newOptions = [...newOptions, ...results];
                    }

                    setOptions(newOptions);
                }
            },
        );

        return () => {
            active = false;
        };

    }, [value, inputValue, fetch]);

    const handleSelectCity = (event: any, newValue: PlaceType | null) => {
        setOptions(newValue ? [newValue, ...options] : options);

        if (newValue) {
            setValue(newValue);
            const {description} = newValue
            const stringArrayLocation = description.split(',');
            console.log('newValue',newValue)
            if (stringArrayLocation.length == 3) {
                setLocationState({
                    city: stringArrayLocation[0],
                    region: stringArrayLocation[1],
                    country: stringArrayLocation[2],
                })
            }
            else if(stringArrayLocation.length == 2) {
                setLocationState({
                    city: stringArrayLocation[0],
                    region: 'AnyWhere',
                    country: stringArrayLocation[2],
                })
            }else {
                setValue(null)
                setInputValue('')
                alert('debes seleccionar el nombre de una ciudad, no solo un pais o ni tampoco una direccion')

            }

        }
    }

    return (
        <Autocomplete
            id="google-map-demo"
            getOptionLabel={(option) =>
                typeof option === 'string' ? option : option.description
            }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            fullWidth={true}
            includeInputInList
            filterSelectedOptions
            value={value}
            noOptionsText="No locations"
            onChange={handleSelectCity}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => (
                <TextField {...params} label="Location" fullWidth/>
            )}
            renderOption={(props, option) => {
                const matches =
                    option.structured_formatting.main_text_matched_substrings || [];

                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match: any) => [match.offset, match.offset + match.length]),
                );

                return (
                    <li {...props}>
                        <Grid container alignItems="center">
                            <Grid item sx={{display: 'flex', width: 44}}>
                                <LocationOnIcon sx={{color: 'text.secondary'}}/>
                            </Grid>
                            <Grid item sx={{width: 'calc(100% - 44px)', wordWrap: 'break-word'}}>
                                {parts.map((part: any, index: any) => (
                                    <Box
                                        key={index}
                                        component="span"
                                        sx={{fontWeight: part.highlight ? 'bold' : 'regular'}}
                                    >
                                        {part.text}
                                    </Box>
                                ))}
                                <Typography variant="body2" color="text.secondary">
                                    {option.structured_formatting.secondary_text}
                                </Typography>
                            </Grid>
                        </Grid>
                    </li>
                );
            }}
        />
    );
}