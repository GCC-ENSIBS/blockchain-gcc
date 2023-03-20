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

export const lucky_code = `// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

contract Lucky {
  uint256 private seed;
  mapping(address => uint) public consecutiveWins;
  bool public solved = false;

  constructor() payable {
      seed = block.timestamp;
  }

  function play(uint256 guess) public payable {
      require(msg.value == 1 ether, "La mise doit etre de 1 ether.");
      require(guess == 0 || guess == 1, "Vous devez deviner 0 ou 1.");

      uint256 randomNumber = uint256(keccak256(abi.encodePacked(seed, msg.sender, block.prevrandao, block.timestamp)));
      uint256 result = randomNumber % 2;

      uint256 payout = result == guess ? msg.value : msg.value / 1000;
      //payable(msg.sender).transfer(payout);
      (bool sent, ) = msg.sender.call{value: payout}("");
      require(sent, "Failed to send Ether");

      consecutiveWins[msg.sender] = result == guess ? consecutiveWins[msg.sender] + 1 : 0;

      seed = randomNumber;
  }

  function isSolve(address player) public returns(bool){
      if(consecutiveWins[player] >= 10){solved = true;}
      return solved;
  }
}`

export const randomgame_code = `// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

contract RandomGame{
    uint public gammerCount;
    bool public gameOver = false;
    address public winner;

    address[] gammers;

    constructor() payable{
        require(msg.value == 10 ether);
    }

    modifier onlyHacker{
        require(
            address(this).balance % 1 ether != 0 ether,
            "this is an honnorable prize only for hacker"
        );
        _;
    }

    function join() public payable {
        require(msg.value == 1 ether, "You must send 1 ether to join the game");
        require(!gameOver, "The game is over. No more gammers allowed");

        gammers.push(msg.sender);
        gammerCount++;
    }

    function chooseWinner() public {
        require(gammerCount > 1, "There must be at least 2 players to choose a winner");
        require(!gameOver, "The winner has already been chosen");

        uint randomIndex = uint(keccak256(abi.encodePacked(block.timestamp, block.prevrandao))) % gammerCount;
        
        winner = gammers[randomIndex];
        gameOver = true;
    }

    function Th3_sp3Ci41_prize() public onlyHacker {
        (bool sent,) = msg.sender.call{value: address(this).balance}("");
        require(sent, "Address: unable to send value");
    }
}`