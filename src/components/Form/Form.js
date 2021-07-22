import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, {useState, useContext} from 'react';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../context/context';
import {v4 as uuid} from 'uuid';
import {incomeCategories, expenseCategories, resetCategories} from '../../constant/categories';
import formatDate from '../../utils/formatDate';

const initialState = {
    amount: "",
    category: "",
    type: "Income",
    date: formatDate(new Date())
};

const Form = () => {
    const styles = useStyles();
    const [formData, setFormData] = useState(initialState);
    const {addTransaction} = useContext(ExpenseTrackerContext);

    let createTransaction = () => {
        const transaction = {
            ...formData,
            amount: Number(formData.amount),
            id: uuid()
        };
        addTransaction(transaction);
        setFormData(initialState);
        resetCategories();
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                        {
                            formData.type === "Income" ?
                            incomeCategories.map((incomeCategory, index) => {
                                return <MenuItem key={index} value={incomeCategory.type}>{incomeCategory.type}</MenuItem>
                            }) :
                            expenseCategories.map((expenseCategory, index) => {
                                return <MenuItem key={index} value={expenseCategory.type}>{expenseCategory.type}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setFormData({...formData, date: formatDate(e.target.value)})} />
            </Grid>
            <Button className={styles.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form;
