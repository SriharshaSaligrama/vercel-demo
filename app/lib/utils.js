export const validator = (title, content) => {
    const errors = {}
    if ((!(title.trim()) || typeof title !== "string") && (!(content.trim()) || typeof content !== "string")) {
        errors.title = 'Title is required'
        errors.content = 'Content is required'
    }
    else if (!(title.trim()) || typeof title !== "string") {
        errors.title = 'Title is required'
        errors.content = ''
    }
    else if (title.trim().length < 3) {
        errors.title = 'Title should be min 3 characters'
        errors.content = ''
    }
    else if (title.trim().length > 120) {
        errors.title = 'Title should be max 120 characters'
        errors.content = ''
    }
    else if (!(content.trim()) || typeof content !== "string") {
        errors.title = ''
        errors.content = 'Content is required'
    }
    else if (content.trim().length < 3) {
        errors.title = ''
        errors.content = 'Content should be min 3 characters'
    }
    return errors
}