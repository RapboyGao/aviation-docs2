export interface PepecStory {
  index: number;
  title: string;
  content: string;
  translation?: string;
}

export const stories2: PepecStory[] = [
  {
    index: 1,
    title: "Singapore Airlines Flight Crash",
    content: `On October 31, 2000, Singapore Airlines Flight zero zero six, a Boeing 747-400, crashed during takeoff from Taipei's Chiang Kai-shek Airport, resulting in 83 deaths.  

The flight, bound for Los Angeles via Taipei, attempted departure amid Typhoon Xangsane’s heavy rain and low visibility. Cleared for Runway zero five left, the crew mistakenly used closed Runway zero five right, which was under construction. Poor lighting, absent ground radar, and urgency to leave before worsening weather caused the crew to miss the error. At 23:17 local time, the aircraft struck construction equipment, broke apart, and caught fire after failing to gain altitude.  

Of 179 people on board, 83 died including 9 passengers and 4 crew, and 96 were injured. The plane was completely destroyed, splitting into sections and suffering severe fire damage.  

Investigations identified key factors: crew misidentification of the runway, inadequate airport signage, lack of ground radar, and adverse weather. The accident highlighted runway safety flaws, leading to improved navigational aids and training.`,
  },
  {
    index: 2,
    title: "Aircraft Collision at Atlanta Airport",
    content: `On September 10, 2024, Delta Air Lines Flight two niner five, an Airbus three fifty bound for Tokyo, collided with Endeavor Air Flight five five two six, a Bombardier CRJ nine hundred heading to Lafayette, during taxiing at Atlanta's Hartsfield-Jackson Airport. The A350's right wingtip struck the CRJ-900's vertical stabilizer, causing significant damage.  

The incident occurred around 10:7 a.m. as the A350 adjusted its path due to a navigation alert while the CRJ waited for takeoff clearance. The A-three-fifty pilot was monitoring left-side traffic, failing to notice the CRJ on the intersecting taxiway.  

One flight attendant on the CRJ sustained a minor injury, while all 277 passengers and crew on both planes were otherwise unharmed. The CRJ's tail was severely bent, and the Airbus' wingtip showed minor damage .  

Preliminary findings suggest the collision resulted from the A-three-fifty crew's distraction and inadequate clearance monitoring. The National Transportation Safety Board is investigating air traffic control coordination and pilot procedures . Both aircraft were later moved for repairs, and passengers were re-booked on alternate flights.`,
  },
];
