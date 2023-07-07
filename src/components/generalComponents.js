import { TextField } from "@mui/material";

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
];

export function CurrencyInput({currency, setCurrency, amount, setAmount}) {
    return (
        <div className='flex flex-col items-center'>
            <TextField
                id="outlined-select-currency-native"
                select
                label="Select"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                SelectProps={{
                    native: true,
                }}
                helperText="Please select your currency"
                sx={{ width: '25ch' }}
            >
                {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>

            <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                sx={{ width: '25ch' }}
            />
        </div>
    )
}