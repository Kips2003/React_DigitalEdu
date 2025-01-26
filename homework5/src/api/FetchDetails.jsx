export async function fetchDetails(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch details');
    }
    
    return response.json();
}