export const showMessage = (req, res) => {
    res.status(200).send(req.params.message);
};

export const register = async (req, res) => {
    console.log("REQ.BODY...",req.body)
}