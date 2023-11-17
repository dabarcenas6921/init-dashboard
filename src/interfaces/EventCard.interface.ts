export interface EventCard {
  id: number;
  name: string;
  description: string;
  picture: string;
  time: Date;
  location: string;
  program: string;
  rsvpLink: string;
  setEvents: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        description: string;
        picture: string;
        location: string;
        program: string;
        time: Date;
        rsvpLink: string;
      }[]
    >
  >;
}
