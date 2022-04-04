reset

RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
LIGHT_RED='\033[1;31m'
LIGHT_GREEN='\033[1;32m'
YELLOW='\033[1;33m'
LIGHT_BLUE='\033[1;34m'
LIGHT_PURPLE='\033[1;35m'
LIGHT_CYAN='\033[1;36m'
NC='\033[0m'

echo "Choose app type:" 
echo -e "${RED}games${NC}"
echo -e "${GREEN}websites${NC}" 
echo -e "${BLUE}presentation${NC}"
COLOR_ARR=($RED $BLUE $GREEN $YELLOW $ORANGE $PURPLE $CYAN $LIGHT_RED $LIGHTGREEN $LIGHT_BLUE $LIGHT_PURPLE $LIGHT_CYAN)

read app_type
app_dir="dist/projects/${app_type}/"
for d in dist/projects/*/ ; do
    # echo $d
    if [ $app_dir = $d ]
    then
        reset
        echo "Choose app name:"

        for f in $app_dir* ; do
            RANDOM_COLOR=${COLOR_ARR[$(( ( RANDOM % 11 )  + 1 ))]}

            echo -e "${RANDOM_COLOR}${f##*/}${NC}"
        done

        read app_name
        echo $app_name
    fi
done
