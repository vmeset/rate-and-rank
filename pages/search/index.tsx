import { Divider, withLayout } from "../../components";
import { Typography } from "../../components/Typography/Typography";

const Search = () => {
    return (
        <div>
            <Divider />
            <Typography>Функция поиска в режиме разработки</Typography>
            <Divider />
        </div>
    );
};

export default withLayout(Search)