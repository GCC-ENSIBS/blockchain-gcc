export const calculator_code = `pragma solidity >=0.7.0 <0.9.0;

contract Calculator {
    function arithmetic(uint num1, uint num2) public 
    pure returns (uint sum, uint product) {
        sum = num1 + num2;
        product = num1 * num2;
    }

    function multiply(uint num1, uint num2) public pure returns (uint) {
        return num1 * num2;
    }
}`