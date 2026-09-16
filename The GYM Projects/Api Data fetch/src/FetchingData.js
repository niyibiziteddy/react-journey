export default async function fetchData(){
    try{
        const response =await fetch('https://fakestoreapi.com/products')
        if(!response.ok){
            console.log('There was a problem in the fetching of the data')
        }
        const data = await response.json();
        return data
    }catch(err){
        console.log(err.message)
        return "Keep waiting while the problem is being resolved"
    }
    
} 