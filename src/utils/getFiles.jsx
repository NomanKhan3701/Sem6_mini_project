
export const getFiles = async (user, account) => {
    try {
        const filesCount = await user.getFilesCount().call({ from: account });
         console.log(filesCount);
        //(let i=0;i<filesCount;i++)
        //{
       // const file = await user.getFiles(0).call({ from: account });
       // console.log(file)
        //}
        return filesCount;


    } catch (error) {
        console.error(error);
    }
}