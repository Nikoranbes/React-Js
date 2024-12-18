function Button(){
    const styles = {
            backgroundColor:" hsl(344, 77%, 61%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor:" pointer",
    }
    function Click(name) {
        console.log(`Don't Click Me ${name}`);
        
    }

    return (
        <button onClick={() => Click("Deepak")} style={styles}>Click Me</button>
    )
}
export default Button