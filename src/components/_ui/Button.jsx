import React, { Component } from 'react';
import styled from "@emotion/styled";

const ButtonContainer = styled("button")`
    padding: 0.9em 1.6em;
    background: rgb(255, 255, 255, 0);
    font-weight: 700;
    font-family: 'Manrope', 'Inter', sans-serif;
    color: ${(props) => props.theme.colors.grey700};
    outline: none;
    letter-spacing: 0.005em;
    border: 1px solid ${(props) => props.theme.colors.grey700};
    font-size: 0.95em;
    border-radius: 6px;
    position: relative;
    transition: background 100ms ease-in-out;

    p {
        margin: 0;
        font-weight: 700;
        letter-spacing: 0.005em;
        font-family: 'Manrope', 'Inter', sans-serif;
    }

    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.colors.green800};
        border: 1px solid ${(props) => props.theme.colors.green800};
        color: white;
        transition: background 200ms ease-in-out;
    }

    &.Button--secondary {
        padding: 0.9em 1.6em;
        border: 1px solid ${(props) => props.theme.colors.green800};
        color: ${(props) => props.theme.colors.green800};

        &:hover {
            color: white;
            transition: background 200ms ease-in-out;
        }
    }
`

class Button extends Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <ButtonContainer
                onClick={this.props.onClick}
                {...props}>
                {this.props.children}
            </ButtonContainer>
        );
    }
}

export default Button;