export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  cover: string;

  constructor(id: number, name: string, channel: string, seasons: number, description: string,  cover: string) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.cover = cover;
  }
}