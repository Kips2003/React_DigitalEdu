export async function fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    
    return response.json();
}