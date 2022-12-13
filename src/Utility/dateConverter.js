function dateConverter(time) {
    const date = new Date(time);
    return date.toLocaleDateString();
}

export default dateConverter;