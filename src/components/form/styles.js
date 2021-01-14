import styled from "styled-components/macro";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: var(--max-width);
    margin: 8px 0;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1;
    margin: 8px 0;
    margin-left: 8px;

    &:first-of-type {
        margin-left: 0;
    }

    label {
        color: var(--clr-white);
        text-shadow: var(--txt-shadow);
        font-size: 20px;
        width: 100%;
    }

    input {
        border-radius: var(--border-raduis);
        outline: none;
        border: none;
        height: 30px;
        filter: var(--drop-shadow);
        padding: 0 8px;
        width: 100%;
    }
`;

export const ItemSmall = styled(Item)`
    label {
        font-size: 15px;
    }
`;