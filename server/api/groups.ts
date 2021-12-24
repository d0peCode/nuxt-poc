import axios, {AxiosResponse} from "axios";

export interface Group {
    id: string,
    name: string,
    usersIds: string[]
}

export default async (): Promise<Pick<AxiosResponse<Group[]>, any>> => {
    const { data: response } = await axios.get('http://localhost:3001/groups')
    return response
}
