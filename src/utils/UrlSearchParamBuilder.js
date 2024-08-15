export class UrlSearchParamBuilder {
    params = null;

    constructor() {
        this.params = new URLSearchParams();
    }

    setField(fieldName) {
        this.params.append('field', fieldName);
        return this;
    }

    setValue(value) {
        this.params.append('value', value);
        return this;
    }

    getUrlSearchParams() {
        return this.params;
    }
}