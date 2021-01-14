import styled from "styled-components/macro";

export const Container = styled.div`
    padding: 16px;
    background-color: var(--clr-white);
    filter: var(--drop-shadow);
    width: 90%;
    max-width: var(--max-width);
    border-radius: var(--border-raduis);
    margin: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 30px;
    color: var(--clr-dark);
`;

export const SubTitle = styled.h2`
    font-size: 20px;
    color: var(--clr-dark);
`;

export const Details = styled.p`
    text-align: center;
    overflow-wrap: break-word;
    width: 100%;
    color: var(--clr-dark);
    font-size: 20px;
`;

export const Icons = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;

    img {
        height: 20px;
        margin-left: 4px;
    }
`;

export const MealContainer = styled(Container)`
    flex-direction: column;
`;

export const ExerciseContainer = styled(Container)`
    justify-content: space-between;
`;

export const ExerciseItem = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-of-type {
        width: 40%;
    }
`;

export const ExerciseDetails = styled.p`
    text-align: center;
    overflow-wrap: break-word;
    width: 100%;
    color: var(--clr-dark);
    font-size: 15px
`;