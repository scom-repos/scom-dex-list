export default {
"abi":[
{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"bool","name":"addingTokenA","type":"bool"},{"internalType":"uint256","name":"pairIndex","type":"uint256"},{"internalType":"uint256","name":"offerIndex","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"bool","name":"allowAll","type":"bool"},{"internalType":"uint256","name":"restrictedPrice","type":"uint256"},{"internalType":"uint256","name":"startDateAndExpire","type":"uint256"},{"internalType":"uint256","name":"feeIn","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"uint256","name":"_offerIndex","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"bool","name":"addingTokenA","type":"bool"},{"internalType":"uint256","name":"pairIndex","type":"uint256"},{"internalType":"uint256","name":"offerIndex","type":"uint256"},{"internalType":"uint256","name":"amountAIn","type":"uint256"},{"internalType":"bool","name":"allowAll","type":"bool"},{"internalType":"uint256","name":"restrictedPrice","type":"uint256"},{"internalType":"uint256","name":"startDateAndExpire","type":"uint256"},{"internalType":"uint256","name":"feeIn","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"uint256","name":"_offerIndex","type":"uint256"}],"stateMutability":"payable","type":"function"},
{"inputs":[],"name":"configStore","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"govToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"pairIndex","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeAllLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"feeOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"pairIndex","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeAllLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"feeOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"bool","name":"removingTokenA","type":"bool"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"pairIndex","type":"uint256"},{"internalType":"uint256","name":"offerIndex","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"receivingOut","type":"uint256"},{"internalType":"uint256","name":"feeOut","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"bool","name":"removingTokenA","type":"bool"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"pairIndex","type":"uint256"},{"internalType":"uint256","name":"offerIndex","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"receivingOut","type":"uint256"},{"internalType":"uint256","name":"feeOut","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"stateMutability":"payable","type":"receive"}
],
"bytecode":"6101006040523480156200001257600080fd5b506040516200272838038062002728833981810160405260408110156200003857600080fd5b5080516020918201516001600160601b0319606083811b821660805282901b1660a05260408051635aa6e67560e01b81529051929391926001600160a01b03851692635aa6e6759260048082019391829003018186803b1580156200009c57600080fd5b505afa158015620000b1573d6000803e3d6000fd5b505050506040513d6020811015620000c857600080fd5b50516040805163b716d46360e01b815290516001600160a01b039092169163b716d46391600480820192602092909190829003018186803b1580156200010d57600080fd5b505afa15801562000122573d6000803e3d6000fd5b505050506040513d60208110156200013957600080fd5b505160601b6001600160601b03191660c05260408051634eb4ee2760e11b815290516001600160a01b03841691639d69dc4e9160048083019260209291908290030181600087803b1580156200018e57600080fd5b505af1158015620001a3573d6000803e3d6000fd5b505050506040513d6020811015620001ba57600080fd5b50516001600160601b031960609190911b1660e052505060805160601c60a05160601c60c05160601c60e05160601c61249e6200028a600039806109565280610f3852806114fe5250806104d3528061068a528061091f5280610b265280610df95280610ffa528061132152806115c0528061172252508060d2528061073d528061083f52806108875280610b5f5280610bf95280610c245280610d5b5280610ea85280610ed3528061115752806111d852508061141352806118a05280611c3e5280611d9c525061249e6000f3fe6080604052600436106100b55760003560e01c8063ad5c464811610069578063c15ab0cf1161004e578063c15ab0cf14610394578063c45a015514610434578063dc2e3def1461044957610160565b8063ad5c464814610309578063bacd1c241461031e57610160565b806398d201a41161009a57806398d201a41461021d5780639d69dc4e14610273578063a233d84f1461028857610160565b806305268cff146101655780636d025d22146101a357610160565b36610160573373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461015e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c65640000000000000000000000000000000000604482015290519081900360640190fd5b005b600080fd5b34801561017157600080fd5b5061017a6104d1565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156101af57600080fd5b506101ff600480360360a08110156101c657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201351690606081013590608001356104f5565b60408051938452602084019290925282820152519081900360600190f35b34801561022957600080fd5b506101ff6004803603608081101561024057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604081013590606001356106c0565b34801561027f57600080fd5b5061017a610954565b34801561029457600080fd5b5061015e60048036036101408110156102ac57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135821691604082013515159160608101359091169060808101359060a08101359060c08101359060e081013590610100810135906101200135610978565b34801561031557600080fd5b5061017a610b5d565b34801561032a57600080fd5b5061015e600480360361012081101561034257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101351515916040820135169060608101359060808101359060a08101359060c08101359060e0810135906101000135610b81565b61040460048036036101408110156103ab57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013515159060408101359060608101359060808101359060a081013515159060c08101359060e081013590610100810135906101200135610e2f565b6040805173ffffffffffffffffffffffffffffffffffffffff909316835260208301919091528051918290030190f35b34801561044057600080fd5b5061017a611411565b34801561045557600080fd5b50610404600480360361016081101561046d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604081013515159060608101359060808101359060a08101359060c081013515159060e08101359061010081013590610120810135906101400135611435565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806000834281101561056a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006105778a8a89611808565b905060008060008373ffffffffffffffffffffffffffffffffffffffff16637a6a5e1b336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050606060405180830381600087803b1580156105fd57600080fd5b505af1158015610611573d6000803e3d6000fd5b505050506040513d606081101561062757600080fd5b5080516020820151604090920151909450909250905073ffffffffffffffffffffffffffffffffffffffff808d16908e1610610664578183610667565b82825b909850965094508461067a8d8c8a61191f565b6106858c8c8961191f565b6106b07f00000000000000000000000000000000000000000000000000000000000000008c8861191f565b5050505050955095509592505050565b6000806000834281101561073557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610762897f000000000000000000000000000000000000000000000000000000000000000089611808565b905060008060008373ffffffffffffffffffffffffffffffffffffffff16637a6a5e1b336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050606060405180830381600087803b1580156107e857600080fd5b505af11580156107fc573d6000803e3d6000fd5b505050506040513d606081101561081257600080fd5b5080516020820151604090920151909450909250905073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116908d161061086f578183610872565b82825b90985096509450846108858c8c8a61191f565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d886040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156108f857600080fd5b505af115801561090c573d6000803e3d6000fd5b5050505061091a8b88611afc565b6109457f00000000000000000000000000000000000000000000000000000000000000008c8861191f565b50505050509450945094915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b80428110156109e857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006109f58c8c8a611808565b905060008b73ffffffffffffffffffffffffffffffffffffffff168d73ffffffffffffffffffffffffffffffffffffffff1610610a32578a610a35565b8a155b604080517f5592bb530000000000000000000000000000000000000000000000000000000081523360048201528215156024820152604481018b9052606481018a90526084810189905260a48101889052905191925073ffffffffffffffffffffffffffffffffffffffff841691635592bb539160c48082019260009290919082900301818387803b158015610aca57600080fd5b505af1158015610ade573d6000803e3d6000fd5b505050506000808c610af1578789610af4565b88885b90925090508115610b0a57610b0a8f8d8461191f565b8015610b1b57610b1b8e8d8361191f565b8615610b4c57610b4c7f00000000000000000000000000000000000000000000000000000000000000008d8961191f565b505050505050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b8042811015610bf157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610c1e8b7f00000000000000000000000000000000000000000000000000000000000000008a611808565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168c73ffffffffffffffffffffffffffffffffffffffff1610610c7b578a610c7e565b8a155b604080517f5592bb530000000000000000000000000000000000000000000000000000000081523360048201528215156024820152604481018b9052606481018a90526084810189905260a48101889052905191925073ffffffffffffffffffffffffffffffffffffffff841691635592bb539160c48082019260009290919082900301818387803b158015610d1357600080fd5b505af1158015610d27573d6000803e3d6000fd5b505050506000808c610d3a578789610d3d565b88885b90925090508115610d5357610d538e8d8461191f565b8015610dee577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610dcc57600080fd5b505af1158015610de0573d6000803e3d6000fd5b50505050610dee8c82611afc565b8615610e1f57610e1f7f00000000000000000000000000000000000000000000000000000000000000008d8961191f565b5050505050505050505050505050565b6000808242811015610ea257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610ecd8d7f00000000000000000000000000000000000000000000000000000000000000008d611c39565b925060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168e73ffffffffffffffffffffffffffffffffffffffff1610610f2a578c610f2d565b8c155b90508a61110e5760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bc14128f7f52657374726963746564506169722e6665655065724f726465720000000000006040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610fc757600080fd5b505afa158015610fdb573d6000803e3d6000fd5b505050506040513d6020811015610ff157600080fd5b505190506110217f0000000000000000000000000000000000000000000000000000000000000000338784611e9f565b611031878263ffffffff61206f16565b604080517f5fd5e2fc00000000000000000000000000000000000000000000000000000000815233600482015284151560248201528c15156044820152606481018c905260208b811c60848301526fffffffffffffffffffffffffffffffff8c1660a4830152915192995073ffffffffffffffffffffffffffffffffffffffff881692635fd5e2fc9260c4808401939192918290030181600087803b1580156110d957600080fd5b505af11580156110ed573d6000803e3d6000fd5b505050506040513d602081101561110357600080fd5b50519b506111339050565b61113384828d8c8c60208d901c6fffffffffffffffffffffffffffffffff8e166120b8565b8c1561115057891561114b5761114b8e33868d611e9f565b611316565b60003490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156111bd57600080fd5b505af11580156111d1573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb86836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561127d57600080fd5b505af1158015611291573d6000803e3d6000fd5b505050506040513d60208110156112a757600080fd5b505161131457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c65640000000000000000000000000000000000604482015290519081900360640190fd5b505b8515611348576113487f0000000000000000000000000000000000000000000000000000000000000000338689611e9f565b60008a11806113575750600034115b806113625750600086115b156113fd57604080517f33f175fc0000000000000000000000000000000000000000000000000000000081528215156004820152602481018d905260448101889052905173ffffffffffffffffffffffffffffffffffffffff8616916333f175fc91606480830192600092919082900301818387803b1580156113e457600080fd5b505af11580156113f8573d6000803e3d6000fd5b505050505b8a925050509a509a98505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008082428110156114a857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6114b38e8e8d611c39565b925060008d73ffffffffffffffffffffffffffffffffffffffff168f73ffffffffffffffffffffffffffffffffffffffff16106114f0578c6114f3565b8c155b90508a6116d45760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bc14128f7f52657374726963746564506169722e6665655065724f726465720000000000006040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561158d57600080fd5b505afa1580156115a1573d6000803e3d6000fd5b505050506040513d60208110156115b757600080fd5b505190506115e77f0000000000000000000000000000000000000000000000000000000000000000338784611e9f565b6115f7878263ffffffff61206f16565b604080517f5fd5e2fc00000000000000000000000000000000000000000000000000000000815233600482015284151560248201528c15156044820152606481018c905260208b811c60848301526fffffffffffffffffffffffffffffffff8c1660a4830152915192995073ffffffffffffffffffffffffffffffffffffffff881692635fd5e2fc9260c4808401939192918290030181600087803b15801561169f57600080fd5b505af11580156116b3573d6000803e3d6000fd5b505050506040513d60208110156116c957600080fd5b50519b506116f99050565b6116f984828d8c8c60208d901c6fffffffffffffffffffffffffffffffff8e166120b8565b8915611717576117178d61170d578e61170f565b8f5b33868d611e9f565b8515611749576117497f0000000000000000000000000000000000000000000000000000000000000000338689611e9f565b60008a11806117585750600086115b156117f357604080517f33f175fc0000000000000000000000000000000000000000000000000000000081528215156004820152602481018d905260448101889052905173ffffffffffffffffffffffffffffffffffffffff8616916333f175fc91606480830192600092919082900301818387803b1580156117da57600080fd5b505af11580156117ee573d6000803e3d6000fd5b505050505b8a925050509b509b9950505050505050505050565b60008060006118178686612207565b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606094851b811660208084019190915293851b81166034830152604880830199909952825180830390990189526068820183528851988401989098207fff0000000000000000000000000000000000000000000000000000000000000060888301527f000000000000000000000000000000000000000000000000000000000000000090941b9097166089880152609d8701929092527ff2897cea02120778d7f2e63f1e853519f0096d00e5526fc36e12e7e89bdf9e1560bd808801919091528251808803909101815260dd909601909152845194019390932095945050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b602083106119f557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016119b8565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611a57576040519150601f19603f3d011682016040523d82523d6000602084013e611a5c565b606091505b5091509150818015611a8a575080511580611a8a5750808060200190516020811015611a8757600080fd5b50515b611af557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c454400604482015290519081900360640190fd5b5050505050565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b60208310611b7357805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611b36565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611bd5576040519150601f19603f3d011682016040523d82523d6000602084013e611bda565b606091505b5050905080611c34576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806124226023913960400191505060405180910390fd5b505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fd3206d286866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015611d0d57600080fd5b505afa158015611d21573d6000803e3d6000fd5b505050506040513d6020811015611d3757600080fd5b5051905082158015611d47575080155b15611e1a57604080517fc9c6539600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152868116602483015291517f00000000000000000000000000000000000000000000000000000000000000009092169163c9c65396916044808201926020929091908290030181600087803b158015611de757600080fd5b505af1158015611dfb573d6000803e3d6000fd5b505050506040513d6020811015611e1157600080fd5b50519150611e97565b80831115611e8957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c6964207061697220696e6465780000000000000000000000000000604482015290519081900360640190fd5b611e94858585611808565b91505b509392505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017815292518251600094606094938a169392918291908083835b60208310611f7d57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611f40565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611fdf576040519150601f19603f3d011682016040523d82523d6000602084013e611fe4565b606091505b5091509150818015612012575080511580612012575080806020019051602081101561200f57600080fd5b50515b612067576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806124456024913960400191505060405180910390fd5b505050505050565b60006120b183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612370565b9392505050565b6000806000808a73ffffffffffffffffffffffffffffffffffffffff1663db13653c8b8b6040518363ffffffff1660e01b81526004018083151515158152602001828152602001925050506101006040518083038186803b15801561211c57600080fd5b505afa158015612130573d6000803e3d6000fd5b505050506040513d61010081101561214757600080fd5b50604081015160a082015160c083015160e0909301519196509450909250905087151584151514801561217957508287145b801561218457508186145b801561218f57508085145b6121fa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f7264657220706172616d73206e6f74206d6174636800000000000000000000604482015290519081900360640190fd5b5050505050505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156122a557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4944454e544943414c5f41444452455353455300000000000000000000000000604482015290519081900360640190fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16106122df5782846122e2565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff821661236957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f414444524553530000000000000000000000000000000000000000604482015290519081900360640190fd5b9250929050565b60008184841115612419576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156123de5781810151838201526020016123c6565b50505050905090810190601f16801561240b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe5472616e7366657248656c7065723a204554485f5452414e534645525f4641494c45445472616e7366657248656c7065723a205452414e534645525f46524f4d5f4641494c4544a26469706673582212200da54c4d3c5d8b72504cb61a43a0a46cee1ec5e92754fd58a6c3308d96ace0b764736f6c634300060b0033"
}