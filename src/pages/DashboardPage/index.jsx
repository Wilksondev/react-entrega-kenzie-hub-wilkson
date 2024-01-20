import { DefaultTemplate, UserSection, ContentSection } from "../../components";
// import { productAPI } from "../../services/API";

export const DashboardPage = () => {
    // const [loginList, setLoginList] = useState([]);

    // useEffect(() => {
    //     const getLoginList = async () => {
    //         const { data } = await productAPI.get("/users?perPage=15&page=1");
    //         setLoginList(data);
    //     };
    //     getLoginList();
    //     console.log (loginList);
    // }, []);

    // useEffect(() => {
    //     if (loginList !== null) {
    //        localStorage.setItem("@loginListkey", JSON.stringify(loginList));
    //     } else {
    //        localStorage.setItem("@loginListkey", JSON.stringify([]));
    //     }
    //  }, [loginList]);

    return (
        <>
            <DefaultTemplate>
                <UserSection />
                <ContentSection />
            </DefaultTemplate>
        </>
    );
};