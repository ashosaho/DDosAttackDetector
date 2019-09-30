// UDA which collects the IP Address.
function main() {
    this.init = function () {
        this.ipAddress = [];
    }

    this.accumulate = function (value, timestamp) {
        this.ipAddress = this.ipAddress.concat(value)
    }

    this.computeResult = function () {
        return this.ipAddress;
    }
}