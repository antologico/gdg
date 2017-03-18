export function typeBuilder(types) {
    const data = {};
    types.map(function(type) {
        data[type] = type;
    });
    return data;
}
