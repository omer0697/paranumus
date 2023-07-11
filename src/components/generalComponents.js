import { TextField } from "@mui/material";
import { LoadingButton } from '@mui/lab';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'GBP',
        label: '£',
    },
    {
        value: 'DKK',
        label: 'kr',
    },
    {
        value: 'CHF',
        label: 'CHF',
    },
    {
        value:"TRY",
        label:"₺"
    },
];

export function CurrencyWithFlag({currency, setCurrency}) {
    return (
        <TextField
            id="outlined-select-currency-native"
            select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            SelectProps={{
                native: true,
            }}
            helperText="Please select your currency"
            variant="outlined"
            className="w-full"
        >
            {currencies.map((option) => (
                <option key={option.value} value={option.value} className="flex">
                    {option.label}
                    {option.value}
                </option>
            ))}
        </TextField>
    )
}

export function CommonButton({loading, onCLick, text}){
    return (
        <LoadingButton
            loading={loading}
            loadingPosition="start"
            variant="contained"
            color="primary"
            className="w-52 h-10 pt-1"
            onClick={onCLick}
        >
            {text}
        </LoadingButton>
    )
}