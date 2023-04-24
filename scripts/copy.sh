rm -rf src/contracts &&
mkdir -p src/contracts/oswap-openswap-contract &&
mkdir -p src/contracts/oswap-bakery-swap-contract &&
mkdir -p src/contracts/oswap-trader-joe-contract &&
mkdir -p src/contracts/oswap-impossible-swap-contract &&
cp -r node_modules/@scom/oswap-openswap-contract/src/* src/contracts/oswap-openswap-contract &&
cp -r node_modules/@scom/oswap-bakery-swap-contract/src/* src/contracts/oswap-bakery-swap-contract &&
cp -r node_modules/@scom/oswap-trader-joe-contract/src/* src/contracts/oswap-trader-joe-contract &&
cp -r node_modules/@scom/oswap-impossible-swap-contract/src/* src/contracts/oswap-impossible-swap-contract