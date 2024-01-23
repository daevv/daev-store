import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    catalog: [],
    cart: {
        products: [],
        totalSum: 0,
        count: 0,
    }
}

const fetchProducts = createAsyncThunk(
    'shop/getGoods',
    async (limit = 5, skipProducts = 0) => {
        // const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skipProducts}`);
        const response = await fetch(`https://dummyjson.com/products`);
        const data = await response.json();
        return data;
    }
)

const slice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, price } = action.payload;
            state.cart.totalSum += price;
            state.cart.count += 1;
            const elIndex = state.cart.products.findIndex((el) => el.id === id);
            if (elIndex !== -1) {
                state.cart.products[elIndex].count += 1;
            } else {
                state.cart.products.push({ id, count: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const { count, id, price } = action.payload;
            state.cart.count -= count;
            state.cart.totalSum -= price * count;
            state.cart.products = state.cart.products.filter(e => e.id !== id);
        },
        decrease: (state, action) => {
            const { id, price } = action.payload;
            state.cart.count -= 1;
            state.cart.totalSum -= price;
            const elIndex = state.cart.products.findIndex((el) => el.id === id);
            const changingProduct = state.cart.products[elIndex];
            if (changingProduct.count > 1) {
                changingProduct.count -= 1;
            } else {
                state.cart.products = state.cart.products.filter(e => e.id !== id);
            }

        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.catalog = [...action.payload.products];
        })
    }
});

export default slice.reducer;
export { fetchProducts };
export const { addToCart, removeFromCart, increase, decrease } = slice.actions;
