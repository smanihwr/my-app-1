class Serializable {
    fillFromJSON(json: string) {
        var jsonObj = JSON.parse(json);
        for (var propName in jsonObj) {
            this[propName] = jsonObj[propName]
        }
    }
}

export class LoginResponse extends Serializable{
    status: string;
    statusDesc: string;

    GetStatus(): string { return this.status }
    GetStatusDesc(): string { return this.statusDesc }

}