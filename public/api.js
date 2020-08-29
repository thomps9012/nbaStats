const API = {
    async getRandomPlayer() {
        let res;
        try {
            res = await fetch('/api/player');
        } catch (err) {
            console.log(err)
        }
        const json = await res.json();

        return json;
    }
}