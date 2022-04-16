import {observable, action} from "mobx";
import axios from 'axios'



export class Index {

    @observable name = '';

    constructor(root) {
        // this.root = root
    }

    @action
    async post(url, params) {
      return await axios.post(url,params)
    }

    @action
    async get(url, params) {
      return await axios.get(url,params)
    }

    @action
    setBar(text) {
        this.name = text
    }

}