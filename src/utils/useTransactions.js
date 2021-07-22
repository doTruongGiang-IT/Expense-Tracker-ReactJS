import { useContext } from "react";
import { ExpenseTrackerContext } from "../context/context";
import { incomeCategories, expenseCategories, resetCategories } from "../constant/categories";

const useTransactions = (title) => {
    resetCategories();
    const {transactions} = useContext(ExpenseTrackerContext);
    const selectedCategory = transactions.filter((transaction) => {
       return transaction.type === title;
    });
    const total = selectedCategory.reduce((accTran, currentTran) => {
        return accTran += currentTran.amount;
    }, 0);
    const categories = title === "Income" ? incomeCategories : expenseCategories;
    selectedCategory.forEach((transaction) => {
        const category = categories.find((categoryItem) => {
            return categoryItem.type === transaction.category;
        });
        if(category) {
            category.amount += transaction.amount;
        };
    });
    const filteredCategories = categories.filter((category) => category.amount > 0);
    const chartData = {
        datasets: [{
            data: filteredCategories.map((category) => category.amount),
            backgroundColor: filteredCategories.map((category) => category.color),
        }],
        labels: filteredCategories.map((category) => category.type),
    };
    return {total, filteredCategories, chartData};
};

export default useTransactions;