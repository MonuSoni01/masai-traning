 let url = "https://jsonplaceholder.typicode.com/photos"; 

// fetch(url).then(function(res)
// {
//     return res.json()
// }).then(function(res)
// {
//     console.log(res)
// }).catch(function(err)
// {
//     console.log(err,'ERROR')
// })


async function newData ()
{
    let res = await fetch(url)

    let users = await res.json()

    console.log(users); 
}

newData()