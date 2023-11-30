import {Injectable} from '@angular/core';
import {HousingLocation} from './housinglocation';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  
  url = 'http://localhost:3000/locations';
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    const houses: HousingLocation[] = (await data.json()) ?? [];
    return houses.map((house:HousingLocation) => {
      house.photo = this.baseUrl + house.photo;
      return house;  
    })
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const house:HousingLocation = (await data.json()) ?? {};
    house.photo = this.baseUrl + house.photo;
    return house;
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }
}