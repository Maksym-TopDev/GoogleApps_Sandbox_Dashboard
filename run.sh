reset

RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
LIGHT_RED='\033[1;31m'
LIGHT_GREEN='\033[1;32m'
YELLOW='\033[1;33m'
LIGHT_BLUE='\033[1;34m'
LIGHT_PURPLE='\033[1;35m'
LIGHT_CYAN='\033[1;36m'
NC='\033[0m'


function choose_app() {
    echo "Choose app type:" 
    echo -e "${RED}games${NC}"
    echo -e "${GREEN}websites${NC}" 
    echo -e "${CYAN}presentation${NC}"
    COLOR_ARR=($RED $GREEN $YELLOW $ORANGE $PURPLE $CYAN $LIGHT_RED $LIGHTGREEN $LIGHT_BLUE $LIGHT_PURPLE $LIGHT_CYAN)

    read app_type
    app_dir="public/projects/${app_type}/"
    for d in public/projects/*/ ; do
        if [ $app_dir == $d ]
        then
            echo "Choose app name:"

            for f in $app_dir* ; do
                RANDOM_COLOR=${COLOR_ARR[$(( ( RANDOM % 10 )  + 1 ))]}

                echo -e "${RANDOM_COLOR}${f##*/}${NC}"
            done

            read app_name
            reset
            echo "Choose app version:"
            
            for v in $app_dir$app_name/versions/* ; do
                RANDOM_COLOR=${COLOR_ARR[$(( ( RANDOM % 10 )  + 1 ))]}

                echo -e "${RANDOM_COLOR}${v##*/}${NC}" | sed 's/\.bundle\.js//'
            done

            read app_version
            reset
            concurrently "npx nodemon index.js $app_type $app_version $app_name" "webpack --config ./webpack.config.app.js --watch --env type=$app_type --env version=$app_version --env name=$app_name" 
        fi
    done
}

function choose_challenge() {
    npx nodemon index.js
}

echo "Which Section?"
echo -e "${RED}1) Project Section${NC}"
echo -e "${GREEN}2) Most Recent Challenge Section${NC}"
read section_type
if [ $section_type == "1" ]
then
    reset
    choose_app
fi

if [ $section_type == "2" ]
then
    reset
    choose_challenge
fi
