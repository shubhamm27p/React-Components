function handelFormSubmit(event) {
    event.preventDefault();
    console.log('form was submitted');
}

export default function Form() {
    return (<form>
        <input placeholder="write something"/> 
        <button onClick={handelFormSubmit}>Submit</button>
        
    </form>)
}