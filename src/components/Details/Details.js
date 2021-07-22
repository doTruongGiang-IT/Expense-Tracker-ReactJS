import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from '../../utils/useTransactions';

const Details = ({title}) => {
    const styles = useStyles();
    const {total, chartData} = useTransactions(title);

    return (
        <Card className={title === "Income" ? styles.income : styles.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">${total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}

export default Details;
