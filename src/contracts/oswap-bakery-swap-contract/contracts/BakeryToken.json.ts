export default {
"abi":[
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},
{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mintTo","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}
],
"bytecode":"600b60809081526a2130b5b2b93caa37b5b2b760a91b60a052610100604052600460c09081526342414b4560e01b60e0526000620000456001600160e01b03620000d016565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508151620000a4906004906020850190620000d5565b508051620000ba906005906020840190620000d5565b50506006805460ff191660121790555062000177565b335b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200011857805160ff191683800117855562000148565b8280016001018555821562000148579182015b82811115620001485782518255916020019190600101906200012b565b50620001569291506200015a565b5090565b620000d291905b8082111562000156576000815560010162000161565b6123b480620001876000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c8063782d6fe1116100f9578063a9059cbb11610097578063dd62ed3e11610071578063dd62ed3e1461062f578063e7a324dc1461066a578063f1127ed814610672578063f2fde38b146106d1576101b9565b8063a9059cbb1461056f578063b4b5ea57146105a8578063c3cda520146105db576101b9565b80638da5cb5b116100d35780638da5cb5b1461050957806395d89b4114610511578063a0712d6814610519578063a457c2d714610536576101b9565b8063782d6fe1146104955780637ecebe00146104ce578063893d20e814610501576101b9565b806339509351116101665780635c19a95c116101405780635c19a95c146103db5780636fcfff451461040e57806370a082311461045a578063715018a61461048d576101b9565b8063395093511461030b578063449a52f814610344578063587cde1e1461037f576101b9565b806320606b701161019757806320606b70146102a257806323b872dd146102aa578063313ce567146102ed576101b9565b806306fdde03146101be578063095ea7b31461023b57806318160ddd14610288575b600080fd5b6101c6610704565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102005781810151838201526020016101e8565b50505050905090810190601f16801561022d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102746004803603604081101561025157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107b8565b604080519115158252519081900360200190f35b6102906107d6565b60408051918252519081900360200190f35b6102906107dc565b610274600480360360608110156102c057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356107f7565b6102f561089e565b6040805160ff9092168252519081900360200190f35b6102746004803603604081101561032157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356108a7565b61037d6004803603604081101561035a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610908565b005b6103b26004803603602081101561039557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166109d9565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61037d600480360360208110156103f157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a04565b6104416004803603602081101561042457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a11565b6040805163ffffffff9092168252519081900360200190f35b6102906004803603602081101561047057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a29565b61037d610a51565b610290600480360360408110156104ab57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610b51565b610290600480360360208110156104e457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610e1b565b6103b2610e2d565b6103b2610e3c565b6101c6610e58565b6102746004803603602081101561052f57600080fd5b5035610ed7565b6102746004803603604081101561054c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610f83565b6102746004803603604081101561058557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610ffe565b610290600480360360208110156105be57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611012565b61037d600480360360c08110156105f157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060208101359060408101359060ff6060820135169060808101359060a001356110ae565b6102906004803603604081101561064557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661140a565b610290611442565b6106b16004803603604081101561068857600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff16906020013563ffffffff1661145d565b6040805163ffffffff909316835260208301919091528051918290030190f35b61037d600480360360208110156106e757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661148a565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107ae5780601f10610783576101008083540402835291602001916107ae565b820191906000526020600020905b81548152906001019060200180831161079157829003601f168201915b5050505050905090565b60006107cc6107c5611524565b8484611528565b5060015b92915050565b60035490565b6040518060436121cf82396043019050604051809103902081565b600061080484848461166f565b61089484610810611524565b61088f856040518060600160405280602881526020016121816028913973ffffffffffffffffffffffffffffffffffffffff8a1660009081526002602052604081209061085b611524565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff61184216565b611528565b5060019392505050565b60065460ff1690565b60006107cc6108b4611524565b8461088f85600260006108c5611524565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6118f316565b610910611524565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461099957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6109a38282611967565b73ffffffffffffffffffffffffffffffffffffffff8083166000908152600760205260408120546109d5921683611a9a565b5050565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152600760205260409020541690565b610a0e3382611c8c565b50565b60096020526000908152604090205463ffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b610a59611524565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614610ae257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6000438210610bab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806122386027913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831660009081526009602052604090205463ffffffff1680610be65760009150506107d0565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260086020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff860181168552925290912054168310610cab5773ffffffffffffffffffffffffffffffffffffffff841660009081526008602090815260408083207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9490940163ffffffff168352929052206001015490506107d0565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260086020908152604080832083805290915290205463ffffffff16831015610cf35760009150506107d0565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82015b8163ffffffff168163ffffffff161115610dd757600282820363ffffffff16048103610d436120fa565b5073ffffffffffffffffffffffffffffffffffffffff8716600090815260086020908152604080832063ffffffff808616855290835292819020815180830190925280549093168082526001909301549181019190915290871415610db2576020015194506107d09350505050565b805163ffffffff16871115610dc957819350610dd0565b6001820392505b5050610d19565b5073ffffffffffffffffffffffffffffffffffffffff8516600090815260086020908152604080832063ffffffff9094168352929052206001015491505092915050565b600a6020526000908152604090205481565b6000610e37610e3c565b905090565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60058054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107ae5780601f10610783576101008083540402835291602001916107ae565b6000610ee1611524565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614610f6a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610f7b610f75611524565b83611967565b506001919050565b60006107cc610f90611524565b8461088f856040518060600160405280602581526020016122a86025913960026000610fba611524565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61184216565b60006107cc61100b611524565b848461166f565b73ffffffffffffffffffffffffffffffffffffffff811660009081526009602052604081205463ffffffff168061104a5760006110a7565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260086020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff86011684529091529020600101545b9392505050565b600060405180806121cf60439139604301905060405180910390206110d1610704565b805190602001206110e0611d53565b30604051602001808581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200194505050505060405160208183030381529060405280519060200120905060006040518080612323603a91396040805191829003603a01822060208084019190915273ffffffffffffffffffffffffffffffffffffffff8c1683830152606083018b905260808084018b90528251808503909101815260a0840183528051908201207f190100000000000000000000000000000000000000000000000000000000000060c085015260c2840187905260e2808501829052835180860390910181526101028501808552815191840191909120600091829052610122860180865281905260ff8c1661014287015261016286018b905261018286018a9052935191965092945091926001926101a280830193927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08301929081900390910190855afa15801561127e573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116611315576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806122126026913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600a60205260409020805460018101909155891461139a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806123016022913960400191505060405180910390fd5b874211156113f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806121a96026913960400191505060405180910390fd5b6113fd818b611c8c565b505050505b505050505050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291909152205490565b60405180603a6123238239603a019050604051809103902081565b60086020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b611492611524565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461151b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610a0e81611d57565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316611594576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806121376024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611600576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061235d6022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166116db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806121126025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611747576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806122856023913960400191505060405180910390fd5b6117978160405180606001604052806026815260200161225f6026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260016020526040902054919063ffffffff61184216565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526001602052604080822093909355908416815220546117d9908263ffffffff6118f316565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156118eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156118b0578181015183820152602001611898565b50505050905090810190601f1680156118dd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156110a757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff82166119e957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f42455032303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6003546119fc908263ffffffff6118f316565b60035573ffffffffffffffffffffffffffffffffffffffff8216600090815260016020526040902054611a35908263ffffffff6118f316565b73ffffffffffffffffffffffffffffffffffffffff831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611ad65750600081115b15611c875773ffffffffffffffffffffffffffffffffffffffff831615611bb35773ffffffffffffffffffffffffffffffffffffffff831660009081526009602052604081205463ffffffff169081611b30576000611b8d565b73ffffffffffffffffffffffffffffffffffffffff8516600090815260086020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff87011684529091529020600101545b90506000611ba1828563ffffffff611e5016565b9050611baf86848484611e92565b5050505b73ffffffffffffffffffffffffffffffffffffffff821615611c875773ffffffffffffffffffffffffffffffffffffffff821660009081526009602052604081205463ffffffff169081611c08576000611c65565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260086020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff87011684529091529020600101545b90506000611c79828563ffffffff6118f316565b905061140285848484611e92565b505050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526007602052604081205490911690611cc084610a29565b73ffffffffffffffffffffffffffffffffffffffff85811660008181526007602052604080822080547fffffffffffffffffffffffff000000000000000000000000000000000000000016898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611d4d828483611a9a565b50505050565b4690565b73ffffffffffffffffffffffffffffffffffffffff8116611dc3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061215b6026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60006110a783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611842565b6000611eb6436040518060600160405280603481526020016122cd60349139612082565b905060008463ffffffff16118015611f2a575073ffffffffffffffffffffffffffffffffffffffff8516600090815260086020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8901811685529252909120548282169116145b15611f925773ffffffffffffffffffffffffffffffffffffffff8516600090815260086020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8901168452909152902060010182905561202b565b60408051808201825263ffffffff8084168252602080830186815273ffffffffffffffffffffffffffffffffffffffff8a166000818152600884528681208b861682528452868120955186549086167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000918216178755925160019687015590815260099092529390208054928801909116919092161790555b6040805184815260208101849052815173ffffffffffffffffffffffffffffffffffffffff8816927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a25050505050565b60008164010000000084106120f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482018181528351602484015283519092839260449091019190850190808383600083156118b0578181015183820152602001611898565b509192915050565b60408051808201909152600080825260208201529056fe42455032303a207472616e736665722066726f6d20746865207a65726f206164647265737342455032303a20617070726f76652066726f6d20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737342455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636542414b453a3a64656c656761746542795369673a207369676e61747572652065787069726564454950373132446f6d61696e28737472696e67206e616d652c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742942414b453a3a64656c656761746542795369673a20696e76616c6964207369676e617475726542414b453a3a6765745072696f72566f7465733a206e6f74207965742064657465726d696e656442455032303a207472616e7366657220616d6f756e7420657863656564732062616c616e636542455032303a207472616e7366657220746f20746865207a65726f206164647265737342455032303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f42414b453a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d6265722065786365656473203332206269747342414b453a3a64656c656761746542795369673a20696e76616c6964206e6f6e636544656c65676174696f6e28616464726573732064656c6567617465652c75696e74323536206e6f6e63652c75696e74323536206578706972792942455032303a20617070726f766520746f20746865207a65726f2061646472657373a2646970667358221220c0c716e6ece7ab9546a64dfa336b5ae3ca2a239b8ddc7984dcd7d244a75b2a5a64736f6c63430006060033"
}