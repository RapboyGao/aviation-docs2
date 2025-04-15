export interface ContentProtocol {
  /** 第多少条 */
  index: number;
  /** 内容 */
  content: string;
  /** 如果录音内容对不上，输入录音内容 */
  mismatch?: string;
  /** 如果数字或单词读法特殊标注数字读法 */
  specialReading?: string;
  /** 文件大小 */
  size: number;
  /** 是否为方形许可或等待 */
  hasLotOfInfo?: true;

  /**
   * 笔记
   */
  notes?: string;
}

export function getContent(item: ContentProtocol) {
  return item.specialReading || item.mismatch || item.content;
}

export function formatNumberToReading(str: string): string {
  return str.replace(/\d+/g, (num) => {
    let newString = "";
    for (let digit of num) {
      const digitStr = numberDictionary[+num];
      if (digitStr) {
        newString += " " + digitStr;
      }
    }
    return newString.trim();
  });
}

export function getActualLength(item: ContentProtocol) {
  return formatNumberToReading(getContent(item)).length;
}

export const numberDictionary: { [index: number]: string } = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

export const contents: ContentProtocol[] = [
  {
    index: 1,
    content: "Maintaining FL310.",
    size: 49018,
  },
  {
    index: 2,
    content: "Descending to FL290.",
    size: 49387,
  },
  {
    index: 3,
    content: "Reaching FL190.",
    size: 41882,
  },
  {
    index: 4,
    content: "Maintaining FL90 over WXJ.",
    size: 73395,
  },
  {
    index: 5,
    content: "Continue descent to 3000 feet, QNH 1012.",
    size: 80139,
  },
  {
    index: 6,
    content: "Passing FL180 for FL310.",
    size: 74009,
  },
  {
    index: 7,
    content: "Cleared to enter controlled airspace not above FL100.",
    size: 78979,
  },
  {
    index: 8,
    content: "Request further climb.",
    size: 38891,
  },
  {
    index: 9,
    content: "Fly direct to SHA, not below FL180.",
    size: 92249,
  },
  {
    index: 10,
    content: "After passing CGO descend to FL80.",
    size: 80011,
  },
  {
    index: 11,
    content: "Stop descent at FL210.",
    size: 62509,
  },
  {
    index: 12,
    content: "Descending to reach FL150 by WXI.",
    size: 78205,
  },
  {
    index: 13,
    content: "Unable to reach FL150 by ZHO due performance.",
    size: 95967,
  },
  {
    index: 14,
    content: "Climbing to FL290, to be level by 55.",
    size: 70190,
  },
  {
    index: 15,
    content: "Descend at 2000 feet per minute.",
    size: 41215,
  },
  {
    index: 16,
    content: "Climbing at 1000 feet per minute or greater.",
    size: 53251,
  },
  {
    index: 17,
    content: "When ready, descend to FL210, level at PLT.",
    size: 77381,
  },
  {
    index: 18,
    content: "Right heading 330, descending to 3000 feet, cleared for ILS approach Runway 36R.",
    size: 126430,
  },
  {
    index: 19,
    content: "Descend to 3000 feet, information P is current.",
    size: 73029,
  },
  {
    index: 20,
    content: "Expedite descent to FL180.",
    size: 49867,
  },
  {
    index: 21,
    content: "Expedite climb to FL190.",
    size: 51204,
  },
  {
    index: 22,
    content: "Climb to FL280 expedite until passing FL180.",
    size: 86211,
  },
  {
    index: 23,
    content: "Unable to expedite climb due weight.",
    size: 43431,
  },
  {
    index: 24,
    content: "Descending immediately to FL200 due traffic.",
    size: 67307,
  },
  {
    index: 25,
    content: "When ready, climb to FL280, report leaving FL200.",
    size: 74567,
  },
  {
    index: 26,
    content: "Leaving FL200, climbing to FL280.",
    size: 82421,
  },
  {
    index: 27,
    content: "Maintaining own separation and VMC, descending to FL80.",
    size: 85273,
  },
  {
    index: 28,
    content: "Reaching 8000 feet, request further climb.",
    size: 55429,
  },
  {
    index: 29,
    content: "Cancel SID, track direct to LLK, climb to and maintain FL110.",
    size: 105185,
  },
  {
    index: 30,
    content: "Experiencing icing condition. Request further descent.",
    mismatch: "Experiencing icing conditions. Request further descent.",
    size: 65373,
  },
  {
    index: 31,
    content: "Icing condition encountered. Request further climb.",
    mismatch: "Icing conditions encountered. Request further climb.",
    size: 58614,
  },
  {
    index: 32,
    content: "Experiencing severe turbulence. Request further descent.",
    size: 65505,
  },
  {
    index: 33,
    content: "Reduce speed to Mach decimal 76.",
    size: 60765,
  },
  {
    index: 34,
    content: "Maintain Mach point 84 or greater.",
    size: 47864,
  },
  {
    index: 35,
    content: "Maintain Mach point 80 or less.",
    size: 41856,
  },
  {
    index: 36,
    content: "Maintain present speed.",
    size: 27572,
  },
  {
    index: 37,
    content: "Maintain 250 knots or greater.",
    size: 46499,
  },
  {
    index: 38,
    content: "Reduce to minimum clean speed.",
    size: 35190,
  },
  {
    index: 39,
    content: "Reduce to minimum approach speed.",
    size: 35802,
  },
  {
    index: 40,
    content: "Maintain 160 knots until 4 miles final.",
    mismatch: "Maintain 160 knots until 4 mile final.",
    size: 58547,
  },
  {
    index: 41,
    content: "Maintain 160 knots until outer marker.",
    size: 53292,
  },
  {
    index: 42,
    content: "Descend to FL120, on speed conversion, 250 knots.",
    size: 81187,
  },
  {
    index: 43,
    content: "Cancel speed restriction, continue descent to 7000 feet.",
    size: 70135,
  },
  {
    index: 44,
    content: "LMN-02 Departure, passing 2500 feet climbing to 9000 feet.",
    specialReading: "LMN-02 Departure, passing 2500 feet climbing to nine thousand feet.",
    size: 94187,
    hasLotOfInfo: true,
  },
  {
    index: 45,
    content: "Maintaining FL350, cleared to destination, flight planned route [raʊt].",
    hasLotOfInfo: true,
    size: 81536,
  },
  {
    index: 46,
    content: "Request radar vectors for visual approach Runway 22.",
    size: 58798,
  },
  {
    index: 47,
    content: "Request join downwind Runway 31.",
    size: 47844,
  },
  {
    index: 48,
    content: "Request taxi to holding point Runway 13.",
    size: 50172,
  },
  {
    index: 49,
    content: "Request taxi to south maintenance ramp.",
    size: 47767,
  },
  {
    index: 50,
    content: "Request frequency change.",
    size: 38083,
  },
  {
    index: 51,
    content: "15NM to HRB, FL290, tracking to JMU, squawking 6543.",
    specialReading: "Fifteen nautical miles to HRB, flight level two niner zero, tracking to JMU, squawking 6543.",
    size: 170139,
  },
  {
    index: 52,
    content: "Contact Control on 118.9.",
    size: 49313,
  },
  {
    index: 53,
    content: "Position OBLIK at 0646, maintaining FL310, estimating ZF 0658, WUH next.",
    size: 198999,
  },
  {
    index: 54,
    content: "Next report at WXA.",
    size: 44835,
  },
  {
    index: 55,
    content: "Omit position reports.",
    size: 29829,
  },
  {
    index: 56,
    content: "Omit position reports on this frequency.",
    size: 45230,
  },
  {
    index: 57,
    content: "Resume position reporting.",
    size: 36679,
  },
  {
    index: 58,
    content: "Delay not determined due runway obstruction.",
    size: 47012,
  },
  {
    index: 59,
    content: "Approach time not determined due weather.",
    size: 42680,
  },
  {
    index: 60,
    content: "Slot time not determined due flow control.",
    size: 52055,
  },
  {
    index: 61,
    content: "Revised slot time at 56.",
    size: 51413,
  },
  {
    index: 62,
    content: "Expect hold at HUR VOR for 10 minutes due traffic.",
    size: 76284,
  },
  {
    index: 63,
    content: "Expected approach time 44.",
    size: 41848,
  },
  {
    index: 64,
    content: "Revised expected approach time 54.",
    size: 51367,
  },
  {
    index: 65,
    content: "No delay expected.",
    size: 24769,
  },
  {
    index: 66,
    content: "Delay not determined, numerous aircraft holding for weather improvement.",
    size: 68151,
  },
  {
    index: 67,
    content: "Cleared to exit the hold, fly direct to ML. Contact Approach on 128.35.",
    specialReading: "Cleared to exit the hold, fly direct to ML. Contact Approach on one two eight tree fife.",
    size: 96768,
    hasLotOfInfo: true,
  },
  {
    index: 68,
    content: "Approach clearance canceled, turn left direct to DA, climb to 4000 feet, hold as published, expect further clearance at time 50.",
    size: 151712,
    hasLotOfInfo: true,
  },
  {
    index: 69,
    content: "Ready for approach.",
    size: 32826,
  },
  {
    index: 70,
    content: "Request leave the holding pattern.",
    size: 38773,
  },
  {
    index: 71,
    content: "After passing SY VOR, leave the hold on heading 250, cleared for VOR approach Runway 06.",
    size: 142740,
    hasLotOfInfo: true,
  },
  {
    index: 72,
    content: "Leave JFK VOR heading 210.",
    size: 61541,
  },
  {
    index: 73,
    content: "Cleared to LHR, hold at LHR as published. Maintain 8000 feet. Expect further clearance at 18.",
    size: 167884,
    hasLotOfInfo: true,
  },
  {
    index: 74,
    content: "Hold south of AMS VOR at 9000 feet, inbound track 270 degrees, left hand pattern, outbound time 1 minute. Expect further clearance at 46.",
    size: 227035,
    hasLotOfInfo: true,
  },
  {
    index: 75,
    content: "Cleared to the 180 radial of PER VOR at 15 DME. Hold south, left hand pattern, outbound time 2 minutes, expect approach clearance at 37.",
    size: 213124,
    hasLotOfInfo: true,
  },
  {
    index: 76,
    content: "Information P received, stand 03, ready to copy ATC clearance.",
    size: 103036,
  },
  {
    index: 77,
    content: "Gate 26, request clearance to London with information F.",
    size: 83622,
  },
  {
    index: 78,
    content: "Cleared to destination, flight planned route [raʊt], cruising level 330, departure Runway 04, initial altitude 7000 feet. HZ01 Departure, squawk 2563, departure frequency 124.35.",
    size: 329166,
    hasLotOfInfo: true,
  },
  {
    index: 79,
    content: "Cleared to destination via ZAM, flight planned route [raʊt], D03 Departure, cruising level 230, squawk 3763.",
    size: 209985,
    hasLotOfInfo: true,
  },
  {
    index: 80,
    content: "Cleared to destination via flight planned route [raʊt], Runway 36R, LKO-01 Departure, initially climb to 4500 feet, cruising level 310, when airborne contact 119.7, squawk 2515.",
    size: 331539,
    hasLotOfInfo: true,
  },
  {
    index: 81,
    content: "Cleared via ZF-01 Departure, initial altitude 5000 feet. Departure frequency 125.9. Cruising level 290, departure Runway 04. Squawk 6563.",
    size: 258282,
    hasLotOfInfo: true,
  },
  {
    index: 82,
    content: "Cleared to destination via flight plan route [raʊt]. Departure Runway 36L. HZ-01D Departure. Initial altitude 5000 feet. Cruising level 330. Departure frequency 119.45, squawk 5667.",
    size: 305610,
    hasLotOfInfo: true,
  },
  {
    index: 83,
    content: "Recleared to destination via ZF01 Departure, Runway 36R, rest of clearance unchanged.",
    size: 149068,
    hasLotOfInfo: true,
  },
  {
    index: 84,
    content: "Recleared to destination via B213, WHA, R343, rest of route [raʊt] unchanged.",
    size: 159564,
    hasLotOfInfo: true,
  },
  {
    index: 85,
    content: "Cleared to destination via flight planned route [raʊt], initial climb to 2700 feet, request level change en-route, departure frequency 120.3, squawk 0722.",
    size: 217318,
    hasLotOfInfo: true,
  },
  {
    index: 86,
    content: "Gate15, information C, ready to copy ATC clearance.",
    size: 77428,
  },
  {
    index: 87,
    content: "Cleared to destination, BK02 RNAV Departure, initially 3000 feet, departure frequency 125.4, squawk 3311.",
    size: 202547,
    hasLotOfInfo: true,
  },
  {
    index: 88,
    content: "Say again all after 3000 feet.",
    size: 49885,
  },
  {
    index: 89,
    content: "Say again all before departure frequency.",
    size: 53739,
  },
  {
    index: 90,
    content: "Say again the initial altitude.",
    size: 44412,
  },
  {
    index: 91,
    content: "Unable to cross LX FL150 due weight, maintaining FL130.",
    size: 115447,
  },
  {
    index: 92,
    content: "Destination Beijing, request departure information.",
    size: 60103,
  },
  {
    index: 93,
    content: "Bay 24, request start-up.",
    size: 35169,
  },
  {
    index: 94,
    content: "Start up approved, QNH 2991.",
    size: 68724,
  },
  {
    index: 95,
    content: "Start up approved, altimeter setting 2991.",
    size: 57307,
  },
  {
    index: 96,
    content: "Start up at 35, QNH 997.",
    size: 64144,
  },
  {
    index: 97,
    content: "Expect start up at 35, QNH 1030.",
    size: 82900,
  },
  {
    index: 98,
    content: "Expect departure at 49, start up at own discretion, QNH 1004.",
    size: 99928,
  },
  {
    index: 99,
    content: "Radio check on 118.3.",
    size: 62460,
  },
  {
    index: 100,
    content: "I read you 5.",
    size: 33697,
  },
  {
    index: 101,
    content: "You are unreadable.",
    size: 27224,
  },
  {
    index: 102,
    content: "Can you speak slower?",
    size: 30765,
  },
  {
    index: 103,
    content: "How do you read?",
    size: 22403,
  },
  {
    index: 104,
    content: "QNH 997, I say again, QNH 997.",
    size: 83346,
  },
  {
    index: 105,
    content: "Stand 27, request pushback.",
    size: 44795,
  },
  {
    index: 106,
    content: "Pushback approved, Runway 31.",
    size: 45878,
  },
  {
    index: 107,
    content: "Stand by pushback.",
    size: 28429,
  },
  {
    index: 108,
    content: "Pushback at own discretion.",
    size: 32368,
  },
  {
    index: 109,
    content: "Pushback approved, long pushback.",
    size: 40446,
  },
  {
    index: 110,
    content: "Pushback to taxiway A approved.",
    size: 38276,
  },
  {
    index: 111,
    content: "Pushback approved, facing west.",
    size: 41711,
  },
  {
    index: 112,
    content: "Cancel pushback, we have maintenance problem.",
    size: 45049,
  },
  {
    index: 113,
    content: "Ground, Cockpit. Ready for pushback.",
    size: 41172,
  },
  {
    index: 114,
    content: "Brakes released.",
    size: 19717,
  },
  {
    index: 115,
    content: "Starting Number One.",
    size: 23518,
  },
  {
    index: 116,
    content: "Brakes set, disconnect.",
    size: 33762,
  },
  {
    index: 117,
    content: "Request taxi.",
    size: 25358,
  },
  {
    index: 118,
    content: "Taxi via taxiway C to holding point Runway 24.",
    size: 63669,
  },
  {
    index: 119,
    content: "Taxi to holding point Runway 24, traffic in sight.",
    size: 58105,
  },
  {
    index: 120,
    content: "Request taxi back for maintenance purpose.",
    size: 51355,
  },
  {
    index: 121,
    content: "Negative. We need 10 minutes to cool the brakes.",
    size: 48455,
  },
  {
    index: 122,
    content: "Approaching holding point, request crossing Runway 24.",
    mismatch: "Approach holding point, request crossing Runway 24.",
    size: 51627,
  },
  {
    index: 123,
    content: "Hold short of Runway 24.",
    size: 32734,
  },
  {
    index: 124,
    content: "Holding, traffic in sight.",
    size: 28661,
  },
  {
    index: 125,
    content: "Cross Runway 24, report runway vacated.",
    size: 52357,
  },
  {
    index: 126,
    content: "Unable to vacate via A2, request full length of runway.",
    size: 71802,
  },
  {
    index: 127,
    content: "Crossing Runway 24, WILCO.",
    size: 37705,
  },
  {
    index: 128,
    content: "Runway vacated.",
    size: 21393,
  },
  {
    index: 129,
    content: "Giving way to B747 passing from left to right.",
    size: 66400,
  },
  {
    index: 130,
    content: "Follow the greens to holding point Runway 05R.",
    size: 59442,
  },
  {
    index: 131,
    content: "Cross red stop-bar at A1, we understand stop-bar unserviceable.",
    size: 92470,
  },
  {
    index: 132,
    content: "After landing Airbus320, cross Runway 24, report vacated.",
    size: 92748,
  },
  {
    index: 133,
    content: "Taxi to holding point C3, Runway 36.",
    size: 74851,
  },
  {
    index: 134,
    content: "Behind Boeing 747 passing left to right, taxi to holding point A1 Runway 24.",
    size: 106211,
  },
  {
    index: 135,
    content: "Ready for departure.",
    size: 27853,
  },
  {
    index: 136,
    content: "After departure, climb straight ahead until 3000 feet.",
    size: 59934,
  },
  {
    index: 137,
    content: "Cancel SID, maintain runway heading.",
    size: 46532,
  },
  {
    index: 138,
    content: "Lining up Runway 01C.",
    size: 44292,
  },
  {
    index: 139,
    content: "Ready for immediate departure.",
    size: 31213,
  },
  {
    index: 140,
    content: "Cleared for immediate takeoff.",
    size: 35974,
  },
  {
    index: 141,
    content: "Runway 06, cleared for takeoff. Report airborne.",
    size: 68488,
  },
  {
    index: 142,
    content: "Cleared for takeoff, Runway 06, wilco.",
    size: 54737,
  },
  {
    index: 143,
    content: "Airborne, passing 500 feet for 4000 feet.",
    size: 52167,
  },
  {
    index: 144,
    content: "The airbus on final in sight.",
    size: 36901,
  },
  {
    index: 145,
    content: "Behind Airbus on short final, line up behind.",
    size: 56559,
  },
  {
    index: 146,
    content: "After departure, turn left heading 190, Runway 24R, cleared for takeoff.",
    size: 99965,
  },
  {
    index: 147,
    content: "Request right turn when airborne due weather.",
    size: 54246,
  },
  {
    index: 148,
    content: "Take off immediately or hold short of runway.",
    size: 45470,
  },
  {
    index: 149,
    content: "Take off immediately or vacate runway.",
    size: 43285,
  },
  {
    index: 150,
    content: "Hold position, cancel takeoff, I say again, cancel takeoff.",
    size: 86758,
  },
  {
    index: 151,
    content: "Holding position.",
    size: 25312,
  },
  {
    index: 152,
    content: "Stopping! Engine fire.",
    size: 33101,
  },
  {
    index: 153,
    content: "Request return to ramp.",
    size: 27323,
  },
  {
    index: 154,
    content: "Tire burst, possible evacuation on runway.",
    size: 51787,
  },
  {
    index: 155,
    content: "Negative intersection departure due performance.",
    size: 54998,
  },
  {
    index: 156,
    content: "Affirm. We can accept intersection departure from C2.",
    size: 68414,
  },
  {
    index: 157,
    content: "Request intersection departure from C2.",
    size: 50552,
  },
  {
    index: 158,
    content: "Request Takeoff Runway Available (TORA) from intersection C2.",
    size: 67497,
  },
  {
    index: 159,
    content: "Request Accelerate-Stop Distance Available (ASDA) from intersection D1.",
    size: 77292,
  },
  {
    index: 160,
    content: "Request Takeoff Distance Available (TODA) from intersection E3.",
    size: 66350,
  },
  {
    index: 161,
    content: "Line up and wait. Understand one aircraft to depart from A2.",
    size: 65979,
  },
  {
    index: 162,
    content: "Taxi via A2, backtrack and line-up Runway 18.",
    size: 72306,
  },
  {
    index: 163,
    content: "Airbus 330 heavy, 8000 feet, Information X.",
    size: 80269,
  },
  {
    index: 164,
    content: "Join right-hand downwind, Runway 34.",
    size: 45260,
  },
  {
    index: 165,
    content: "Number Two, follow airbus 330 on base.",
    size: 57322,
  },
  {
    index: 166,
    content: "Number Two, traffic in sight.",
    size: 34877,
  },
  {
    index: 167,
    content: "Straight-in visual approach, Runway 34.",
    size: 44909,
  },
  {
    index: 168,
    content: "Extend downwind, Number Two, airbus 320 in sight.",
    size: 75897,
  },
  {
    index: 169,
    content: "Orbit right. Number Two.",
    size: 32410,
  },
  {
    index: 170,
    content: "Number Two, follow airbus 320 ahead.",
    size: 46667,
  },
  {
    index: 171,
    content: "Make a short approach.",
    size: 28263,
  },
  {
    index: 172,
    content: "Long final, airfield in sight.",
    size: 39286,
  },
  {
    index: 173,
    content: "Continue approach Runway 25.",
    size: 36998,
  },
  {
    index: 174,
    content: "Runway 27, cleared to land.",
    size: 33377,
  },
  {
    index: 175,
    content: "Short final, request wind check.",
    size: 37823,
  },
  {
    index: 176,
    content: "Request low pass due unsafe landing gear indication.",
    size: 58446,
  },
  {
    index: 177,
    content: "Low pass approved Runway 27, not below 500 feet.",
    size: 65070,
  },
  {
    index: 178,
    content: "Landing clearance canceled. Continue approach.",
    size: 46680,
  },
  {
    index: 179,
    content: "Behind the Boeing 737, cleared to land.",
    size: 50844,
  },
  {
    index: 180,
    content: "Request low approach.",
    size: 33451,
  },
  {
    index: 181,
    content: "Runway not in sight, going around.",
    size: 39552,
  },
  {
    index: 182,
    content: "No contact at minimum, going around.",
    size: 46902,
  },
  {
    index: 183,
    content: "Wind shear, going around.",
    size: 27210,
  },
  {
    index: 184,
    content: "Going around, localizer fluctuation.",
    size: 46905,
  },
  {
    index: 185,
    content: "Follow the standard missed approach procedure, climbing to 3000 feet.",
    size: 66227,
  },
  {
    index: 186,
    content: "Take first right. When vacated, contact Ground 118.35.",
    size: 83218,
  },
  {
    index: 187,
    content: "After vacated contact Ground 121.6.",
    size: 57752,
  },
  {
    index: 188,
    content: "Taxi to Stand 27 via Taxiway A.",
    size: 57029,
  },
  {
    index: 189,
    content: "Taxi to the end of Runway.",
    size: 36413,
  },
  {
    index: 190,
    content: "Confirm construction work adjacent to Gate 37.",
    size: 73121,
  },
  {
    index: 191,
    content: "Confirm centerline taxiway lighting unserviceable.",
    size: 64125,
  },
  {
    index: 192,
    content: "Confirm PAPI light unserviceable.",
    size: 39641,
  },
  {
    index: 193,
    content: "The Runway light is too bright. Request dim it.",
    size: 47379,
  },
  {
    index: 194,
    content: "Flock of birds 3 miles final.",
    mismatch: "Flock of birds 3 mile final.",
    size: 44692,
  },
  {
    index: 195,
    content: "Runway covered with patches of water, braking action medium.",
    size: 57758,
  },
  {
    index: 196,
    content: "Confirm airport rescue and fire facilities category.",
    size: 60039,
  },
  {
    index: 197,
    content: "Is the weather improving or deteriorating?",
    size: 41303,
  },
  {
    index: 198,
    content: "Thicker patches of fog exist further along the runway. RVR significantly reduced.",
    size: 103516,
  },
  {
    index: 199,
    content: "Confirm current RVR less than 400 meters.",
    size: 60847,
  },
  {
    index: 200,
    content: "Confirm visibility more than 1000 meters.",
    size: 57667,
  },
  {
    index: 201,
    content: "Is mid-point RVR available?",
    size: 38892,
  },
  {
    index: 202,
    content: "Confirm RVR Runway 27.",
    size: 44830,
  },
  {
    index: 203,
    content: "RVR Runway 27 is 600 meters.",
    size: 55443,
  },
  {
    index: 204,
    content: "Confirm touchdown RVR greater than 350 meters.",
    specialReading: "Confirm touchdown RVR greater than tree fife zero meters.",
    size: 73290,
  },
  {
    index: 205,
    content: "Confirm stop-end RVR 150 meters.",
    specialReading: "Confirm stop-end RVR one fife zero meters.",
    size: 63188,
  },
  {
    index: 206,
    content: "Confirm midpoint RVR more than 550 meters.",
    specialReading: "Confirm midpoint RVR more than fife fife zero meters.",
    size: 67813,
  },
  {
    index: 207,
    content: "Confirm threshold Runway 27 displaced.",
    size: 52980,
  },
  {
    index: 208,
    content: "The runway surface is damp. Braking action good.",
    size: 51131,
  },
  {
    index: 209,
    content: "Confirm the reason for our flight suspension.",
    size: 47842,
  },
  {
    index: 210,
    content: "Confirm our flight has been suspended due bio-hazards at destination.",
    size: 75502,
  },
  {
    index: 211,
    content: "Confirm the reason for impounding our aircraft.",
    size: 51983,
  },
  {
    index: 212,
    content: "Tow approved via A to remote apron.",
    size: 44574,
  },
  {
    index: 213,
    content: "Request de-icing.",
    size: 24370,
  },
  {
    index: 214,
    content: "Request frost removal only at the gate.",
    size: 46043,
  },
  {
    index: 215,
    content: "De-icing completed. Request taxi.",
    size: 48891,
  },
  {
    index: 216,
    content: "Request start engine at the gate.",
    size: 37769,
  },
  {
    index: 217,
    content: "Request time check.",
    size: 36685,
  },
  {
    index: 218,
    content: "Request backtrack.",
    size: 28849,
  },
  {
    index: 219,
    content: "Unable BK-1A Departure due performance. Request BK-1B.",
    size: 108858,
  },
  {
    index: 220,
    content: "Request departure instruction.",
    size: 37727,
  },
  {
    index: 221,
    content: "When airborne, track extended center-line, cleared for takeoff, Runway 18.",
    size: 68696,
  },
  {
    index: 222,
    content: "Contact Arrival 118.050.",
    size: 59370,
  },
  {
    index: 223,
    content: "Request remote apron for maintenance purpose.",
    size: 43770,
  },
  {
    index: 224,
    content: "Continue present heading.",
    size: 29499,
  },
  {
    index: 225,
    content: "Resume own navigation to BK.",
    size: 43722,
  },
  {
    index: 226,
    content: "Confirm identification lost.",
    size: 39300,
  },
  {
    index: 227,
    content: "Identified, position 50 miles east of BK.",
    size: 61130,
  },
  {
    index: 228,
    content: "30 miles from touchdown, contact Approach 118.1.",
    size: 66618,
  },
  {
    index: 229,
    content: "Three sixty turn left.",
    size: 28510,
  },
  {
    index: 230,
    content: "Orbit left for delay.",
    size: 29530,
  },
  {
    index: 231,
    content: "Looking out.",
    size: 14442,
  },
  {
    index: 232,
    content: "Traffic in sight.",
    size: 24931,
  },
  {
    index: 233,
    content: "Negative contact due IMC.",
    size: 35495,
  },
  {
    index: 234,
    content: "Traffic passed and clear.",
    size: 26749,
  },
  {
    index: 235,
    content: "Squawk 7563.",
    size: 40795,
  },
  {
    index: 236,
    content: "Reset squawk 5101.",
    size: 43755,
  },
  {
    index: 237,
    content: "Squawk ident.",
    size: 29247,
  },
  {
    index: 238,
    content: "Squawk standby.",
    size: 25998,
  },
  {
    index: 239,
    content: "Squawk Charlie and code 5120.",
    size: 49521,
  },
  {
    index: 240,
    content: "Stopping squawk Charlie.",
    size: 31246,
  },
  {
    index: 241,
    content: "Affirm squawk 7500.",
    size: 45506,
  },
  {
    index: 242,
    content: "Altimeter 1003 8000ft.",
    size: 64066,
  },
  {
    index: 243,
    content: "Negative squawk ident due transponder failure.",
    size: 50189,
  },
  {
    index: 244,
    content: "Turn right heading 340.",
    size: 51367,
  },
  {
    index: 245,
    content: "Turn right 20 degrees.",
    size: 41346,
  },
  {
    index: 246,
    content: "Leave BK heading 190.",
    size: 49114,
  },
  {
    index: 247,
    content: "Fly heading 285.",
    size: 34561,
  },
  {
    index: 248,
    content: "Stop turn heading 070.",
    mismatch: "Stop turning heading 070.",
    size: 54030,
  },
  {
    index: 249,
    content: "Request heading 180 due weather.",
    size: 45860,
  },
  {
    index: 250,
    content: "Confirm danger area 113 active.",
    size: 55966,
  },
  {
    index: 251,
    content: "Your radar vector appears to be taking us to the prohibited area, confirm.",
    size: 73230,
  },
  {
    index: 252,
    content: "50 miles right of track approved, when able, proceed direct TB.",
    size: 81160,
  },
  {
    index: 253,
    content: "Indicated speed 270 knots.",
    size: 46187,
  },
  {
    index: 254,
    content: "Maintain 300 knots or less.",
    size: 51260,
  },
  {
    index: 255,
    content: "Maintain 180 knots until 8 miles from touchdown.",
    size: 59296,
  },
  {
    index: 256,
    content: "Maintain Mach decimal 82, transition speed 310 knots.",
    size: 80557,
  },
  {
    index: 257,
    content: "Maintain speed 280 knots or greater for separation.",
    size: 59731,
  },
  {
    index: 258,
    content: "Cross CK at 35 or later.",
    size: 55131,
  },
  {
    index: 259,
    content: "Cross DG at 24 or earlier.",
    size: 51157,
  },
  {
    index: 260,
    content: "Do not exceed 280 knots.",
    size: 43175,
  },
  {
    index: 261,
    content: "Reduce speed to 240 knots.",
    size: 42949,
  },
  {
    index: 262,
    content: "Increase speed to 300 knots or greater.",
    size: 59419,
  },
  {
    index: 263,
    content: "Increase speed by 10 knots.",
    specialReading: "Increase speed by ten knots.",
    size: 40062,
  },
  {
    index: 264,
    content: "Resume normal speed.",
    size: 34156,
  },
  {
    index: 265,
    content: "No speed restrictions.",
    size: 31278,
  },
  {
    index: 266,
    content: "Request speed 200 knots due configuration.",
    size: 57231,
  },
  {
    index: 267,
    content: "Request speed 250 knots due turbulence.",
    size: 53554,
  },
  {
    index: 268,
    content: "Omit position reports until LN.",
    size: 48569,
  },
  {
    index: 269,
    content: "Next report at IP.",
    size: 36055,
  },
  {
    index: 270,
    content: "Report required only at boundary.",
    size: 34518,
  },
  {
    index: 271,
    content: "We have traffic at our 12 o’clock, 5 miles, 500 feet below, climbing.",
    size: 75964,
    notes: "12、1、10点(只有10点的tornado)有our, 其他没有",
  },
  {
    index: 272,
    content: "Traffic indication at our 1 o’clock, 4 miles, same altitude, converging.",
    size: 78872,
    notes: "12、1、10点(只有10点的tornado)有our, 其他没有",
  },
  {
    index: 273,
    content: "Request vectors.",
    size: 25294,
  },
  {
    index: 274,
    content: "Unable to receive transmission on that frequency.",
    size: 55076,
  },
  {
    index: 275,
    content: "Request 15 miles final.",
    size: 34255,
  },
  {
    index: 276,
    content: "Maintain 3000 feet until glide path interception.",
    size: 65611,
  },
  {
    index: 277,
    content: "NOTAM says glide slope for Runway 15 is unserviceable, confirm.",
    size: 77429,
  },
  {
    index: 278,
    content: "Confirm ILS frequency for Runway 17L.",
    size: 60830,
  },
  {
    index: 279,
    content: "In case of going around, turn left heading 210.",
    size: 56625,
  },
  {
    index: 280,
    content: "Advise transponder capability.",
    size: 41021,
  },
  {
    index: 281,
    content: "Transponder Charlie.",
    size: 25249,
  },
  {
    index: 282,
    content: "Transponder unserviceable.",
    size: 30701,
  },
  {
    index: 283,
    content: "ADS-B transmitter 1090 (ten-ninety) data link.",
    specialReading: "ADS-B transmitter one zero nine zero data link.",
    size: 76704,
  },
  {
    index: 284,
    content: "ADS-B receiver 1090 (ten-ninety) data link.",
    specialReading: "ADS-B receiver one zero nine zero data link.",
    size: 55314,
  },
  {
    index: 285,
    content: "Negative ADS-B.",
    size: 26055,
  },
  {
    index: 286,
    content: "Re-enter ADS-B aircraft identification.",
    size: 53602,
  },
  {
    index: 287,
    content: "Stop ADS-B transmission.",
    size: 38473,
  },
  {
    index: 288,
    content: "Stop squawk transmit ADS-B only.",
    size: 46799,
  },
  {
    index: 289,
    content: "Fly no further west of your current position.",
    size: 46423,
  },
  {
    index: 290,
    content: "Unable identify the waypoint, request radar vectors.",
    size: 51434,
  },
  {
    index: 291,
    content: "Right heading 120, my own terrain clearance.",
    size: 52943,
  },
  {
    index: 292,
    content: "Heading 120, correction, 140.",
    size: 53853,
  },
  {
    index: 293,
    content: "We are too low to the surrounding terrain. Confirm we are still being radar vectored.",
    size: 71241,
  },
  {
    index: 294,
    content: "Confirm we are still above your minimum vectoring altitude.",
    size: 47748,
  },
  {
    index: 295,
    content: "Right heading 040 until passing FL70 then direct to BK.",
    mismatch: "Right heading 040 until passing FL70 then track direct to BK.",
    size: 126133,
  },
  {
    index: 296,
    content: "Direct to JO, descend to FL50.",
    size: 86015,
  },
  {
    index: 297,
    content: "Passing FL70.",
    size: 45605,
  },
  {
    index: 298,
    content: "Descending to 4000 feet QNH 1005, expect ILS approach Runway 24.",
    size: 126112,
  },
  {
    index: 299,
    content: "Request straight-in ILS approach Runway 24.",
    size: 64277,
  },
  {
    index: 300,
    content: "Cleared straight-in ILS approach Runway 24, descend to 3000 feet, QNH1011.",
    size: 130477,
  },
  {
    index: 301,
    content: "Airfield in sight, request visual approach.",
    size: 53171,
  },
  {
    index: 302,
    content: "When established on the localizer, descend on the glide path.",
    size: 73800,
  },
  {
    index: 303,
    content: "Established on the localizer.",
    size: 39239,
  },
  {
    index: 304,
    content: "Fully established Runway 24.",
    size: 48808,
  },
  {
    index: 305,
    content: "Cleared VOR-DME approach Runway 24, descending to 3000 feet QNH1007.",
    size: 126645,
  },
  {
    index: 306,
    content: "Runway in sight.",
    size: 27859,
  },
  {
    index: 307,
    content: "Number One, contact Tower 118.7.",
    size: 61099,
  },
  {
    index: 308,
    content: "Passing outer marker.",
    size: 26600,
  },
  {
    index: 309,
    content: "Report MQR outbound.",
    size: 46513,
  },
  {
    index: 310,
    content: "Procedure turn completed, localizer established.",
    size: 58865,
  },
  {
    index: 311,
    content: "Request visual approach.",
    size: 34451,
  },
  {
    index: 312,
    content: "Cleared visual approach Runway 24.",
    size: 43079,
  },
  {
    index: 313,
    content: "Request holding instructions.",
    size: 41432,
  },
  {
    index: 314,
    content: "Hold over BKM VOR at FL100, inbound track 280 degrees, left hand pattern, outbound time 1 minute.",
    size: 162934,
    hasLotOfInfo: true,
  },
  {
    index: 315,
    content: "Request holding procedure.",
    size: 42830,
  },
  {
    index: 316,
    content: "Hold on the 265 radial of BKM VOR between 25 and 30 miles DME, FL100, inbound track 085, right hand pattern, expected approach time 1022.",
    size: 290419,
    hasLotOfInfo: true,
  },
  {
    index: 317,
    content: "Hold at 20 DME of ST VOR, FL100, inbound track 260 degrees, left turns, limiting outbound distance 24 DME.",
    size: 231047,
    hasLotOfInfo: true,
  },
  {
    index: 318,
    content: "Overhead YV, maintaining 3000 feet, entering hold.",
    size: 85282,
  },
  {
    index: 319,
    content: "Leaving BKM VOR heading 110.",
    size: 61044,
  },
  {
    index: 320,
    content: "Leaving FL60, descending to 2500 feet, QNH1008.",
    size: 124014,
  },
  {
    index: 321,
    content: "Position 10 miles north east of LN.",
    size: 76763,
  },
  {
    index: 322,
    content: "Turn right heading 180 for base leg.",
    size: 57690,
  },
  {
    index: 323,
    content: "Reduce to minimum approach speed, turn right heading 230, cleared for ILS approach Runway 27.",
    size: 123905,
    notes: "有两个approach",
  },
  {
    index: 324,
    content: "No ATC speed restrictions. Contact Tower 118.9.",
    size: 99877,
  },
  {
    index: 325,
    content: "Three sixty turn left for delay.",
    size: 50673,
  },
  {
    index: 326,
    content: "Continue present heading, expect through the localizer for spacing.",
    size: 77851,
  },
  {
    index: 327,
    content: "Surveillance radar approach Runway 27, maintaining 2200 feet.",
    size: 90361,
  },
  {
    index: 328,
    content: "QNH1003, threshold elevation 196 feet.",
    size: 101471,
  },
  {
    index: 329,
    content: "Precision radar approach Runway 27 heading 260, descending to 2500 feet, QNH1014.",
    size: 144175,
  },
  {
    index: 330,
    content: "Cleared to JEMMY via BK 1A Arrival.",
    size: 65818,
  },
  {
    index: 331,
    content: "Descend to reach 5000 feet by BK.",
    size: 70283,
  },
  {
    index: 332,
    content: "When ready, descend to FL200. Report leaving FL300.",
    size: 111490,
  },
  {
    index: 333,
    content: "Descend immediately FL250.",
    size: 65522,
  },
  {
    index: 334,
    content: "Descend to altitude 12000 feet QNH 1000.",
    size: 113445,
  },
  {
    index: 335,
    content: "Descend to height 2000 feet QFE 997 hectopascals.",
    size: 108670,
  },
  {
    index: 336,
    content: "Descend to 8000 feet at 1000 feet per minute or greater.",
    size: 87357,
  },
  {
    index: 337,
    content: "Maintain own separation and VMC, descend to FL50.",
    size: 99213,
  },
  {
    index: 338,
    content: "Increasing rate of climb.",
    size: 34521,
  },
  {
    index: 339,
    content: "Unable expedite climb due weight.",
    size: 47929,
  },
  {
    index: 340,
    content: "Climb to 6000 feet, follow KODAP 01 Departure.",
    size: 87421,
  },
  {
    index: 341,
    content: "Passing altitude 2300 feet, climbing to FL80.",
    size: 97264,
  },
  {
    index: 342,
    content: "Climb to FL210, level restrictions of KODAP 01 Departure canceled.",
    size: 104033,
  },
  {
    index: 343,
    content: "Climb to FL 210, cross AU at FL100 or below.",
    size: 113885,
  },
  {
    index: 344,
    content: "Climb to FL290, level at time 55.",
    size: 82837,
  },
  {
    index: 345,
    content: "Unable FL390 by boundary, request FL330.",
    size: 109263,
  },
  {
    index: 346,
    content: "Descend to FL100, cross YU FL150 or above.",
    size: 116009,
  },
  {
    index: 347,
    content: "After passing North Cross, descend to FL150.",
    size: 89784,
  },
  {
    index: 348,
    content: "We are far above profile. Request holding.",
    size: 64838,
  },
  {
    index: 349,
    content: "Stop descent at 5000 feet.",
    size: 53462,
  },
  {
    index: 350,
    content: "Expedite descent until passing FL80.",
    size: 76206,
  },
  {
    index: 351,
    content: "Expect descent after AK.",
    size: 59708,
  },
  {
    index: 352,
    content: "Continue approach Runway 36R, maintain visual separation with preceding traffic.",
    size: 112219,
  },
  {
    index: 353,
    content: "Contact Control 80 miles after BK.",
    size: 78544,
  },
  {
    index: 354,
    content: "Request change to London Control.",
    size: 52335,
  },
  {
    index: 355,
    content: "Monitor Tower 118.1.",
    size: 54091,
  },
  {
    index: 356,
    content: "Remain this frequency.",
    size: 31788,
  },
  {
    index: 357,
    content: "We can see the approach lights at 200 feet.",
    size: 55067,
  },
  {
    index: 358,
    content: "Cleared VOR approach Runway 36, followed by circling to Runway 18.",
    size: 89579,
  },
  {
    index: 359,
    content: "Expect commencing approach at time 50.",
    size: 69765,
  },
  {
    index: 360,
    content: "Unable circling approach due company policy. Request diversion.",
    size: 86033,
  },
  {
    index: 361,
    content: "Request RNAV approach.",
    size: 30236,
  },
  {
    index: 362,
    content: "RNAV approach not available due FMS database. Request VOR approach.",
    size: 100572,
  },
  {
    index: 363,
    content: "Cleared for LDA approach Runway 24.",
    size: 63291,
  },
  {
    index: 364,
    content: "Unable RNAV due equipment, request conventional arrival.",
    size: 73506,
  },
  {
    index: 365,
    content: "Unable RNAV, loss of RAIM, request NDB approach",
    size: 84467,
  },
  {
    index: 366,
    content: "GPS primary lost, going around.",
    size: 55243,
  },
  {
    index: 367,
    content: "RAIM alert, going around.",
    size: 40389,
  },
  {
    index: 368,
    content: "Negative RNAV.",
    size: 28651,
  },
  {
    index: 369,
    content: "Proceed to AK, hold as published, expect approach clearance at 30.",
    size: 129297,
    hasLotOfInfo: true,
  },
  {
    index: 370,
    content: "Request hold for weather improvement, visibility below company minima.",
    size: 91770,
  },
  {
    index: 371,
    content: "Hold at BKM VOR FL250, right hand pattern, expect further clearance at 23, landing delay at destination airport 30 minutes.",
    size: 204017,
    hasLotOfInfo: true,
  },
  {
    index: 372,
    content: "Holding northwest of W VOR FL120, what is the delay for approach?",
    size: 111286,
    hasLotOfInfo: true,
  },
  {
    index: 373,
    content: "Request to extend the holding pattern for accomplishing the checklist.",
    size: 73630,
  },
  {
    index: 374,
    content: "Request extended holding to burn fuel to reduce the weight.",
    size: 68746,
  },
  {
    index: 375,
    content: "Cleared for CAT II ILS approach Runway 24.",
    size: 65431,
  },
  {
    index: 376,
    content: "Join right hand downwind, visual approach Runway 24.",
    size: 66650,
  },
  {
    index: 377,
    content: "Continue approach, prepare for possible go around.",
    size: 61375,
  },
  {
    index: 378,
    content: "Disregard. We made the wrong transmission.",
    size: 52131,
  },
  {
    index: 379,
    content: "Roger, request continue approach.",
    size: 41983,
  },
  {
    index: 380,
    content: "Stand by. We are carrying out procedures.",
    size: 54183,
  },
  {
    index: 381,
    content: "WILCO, words twice.",
    size: 36623,
  },
  {
    index: 382,
    content: "Maintaining FL350, expect descent after BKM VOR.",
    size: 123422,
  },
  {
    index: 383,
    content: "Climb to and maintain FL310. Maintain Mach number decimal 81 or greater until BKM VOR.",
    size: 133816,
  },
  {
    index: 384,
    content: "Descend to and maintain FL 270. Do not exceed Mach number decimal 79.",
    size: 102655,
  },
  {
    index: 385,
    content: "Continue climb to FL 290, cross BKM VOR not above FL 230.",
    size: 115377,
  },
  {
    index: 386,
    content: "Negative, unable cross BKM VOR at or above FL230 due performance.",
    size: 110214,
  },
  {
    index: 387,
    content: "Maintaining FL310 until advised.",
    size: 63637,
  },
  {
    index: 388,
    content: "Descend to FL170, cross BKM VOR at or above FL210.",
    size: 116916,
  },
  {
    index: 389,
    content: "Affirm, cross BKM VOR at or above FL190",
    size: 81707,
  },
  {
    index: 390,
    content: "Negative, unable to cross BKM VOR below FL170.",
    size: 88829,
  },
  {
    index: 391,
    content: "Affirm, cross BKM VOR at or before 55",
    size: 77105,
  },
  {
    index: 392,
    content: "Negative, unable to cross BKM VOR at 43 or later.",
    size: 73876,
  },
  {
    index: 393,
    content: "Request lose time en route due landing delay at destination airport.",
    size: 75968,
  },
  {
    index: 394,
    content: "Request lose time en route to finish the checklist.",
    size: 57204,
  },
  {
    index: 395,
    content: "Request parallel offset from current track due weather ahead.",
    size: 65299,
  },
  {
    index: 396,
    content: "Request parallel offset from current airway for 30 minutes due icing condition.",
    size: 93117,
  },
  {
    index: 397,
    content: "Proceed offset 10 miles right of track until abeam BKM VOR.",
    size: 95240,
  },
  {
    index: 398,
    content: "Cleared offset 25 miles left of track for 30 minutes.",
    size: 79832,
  },
  {
    index: 399,
    content: "Offset canceled, turn right to rejoin the A1 before BKM VOR.",
    size: 97541,
  },
  {
    index: 400,
    content: "Clear of weather, request to resume flight route [raʊt].",
    size: 57044,
  },
  {
    index: 401,
    content: "Climb to and maintain FL290, re-cleared to track direct to BKM VOR, the rest unchanged.",
    size: 127088,
    hasLotOfInfo: true,
  },
  {
    index: 402,
    content: "Estimating crossing LV NDB 1123.",
    size: 75378,
  },
  {
    index: 403,
    content: "Passing POU at 43, maintaining FL310, estimating MLT at 55, next NLD.",
    size: 168874,
  },
  {
    index: 404,
    content: "BKM 47, FL170 descending to FL120, abeam NLD VOR at 55.",
    size: 154653,
  },
  {
    index: 405,
    content: "Report 25 miles from BKM VOR.",
    size: 62860,
  },
  {
    index: 406,
    content: "Report 34 miles from Top of Descent.",
    size: 45903,
  },
  {
    index: 407,
    content: "Report crossing 270 radial BKM VOR.",
    specialReading: "Report crossing two seven zero radial BKM VOR.",
    size: 79637,
  },
  {
    index: 408,
    content: "Report 28 miles DME 210 radial BKM VOR.",
    mismatch: "Report 28 miles DME two one zero degree radial BKM VOR",
    size: 98237,
  },
  {
    index: 409,
    content: "Climb to FL220, report passing FL170.",
    size: 82620,
  },
  {
    index: 410,
    content: "Descending immediately to FL190.",
    size: 57079,
  },
  {
    index: 411,
    content: "Leaving FL220 for FL190.",
    size: 65971,
  },
  {
    index: 412,
    content: "Request clearance to enter controlled airspace northeast of BKM VOR at FL240 at time 43.",
    size: 156440,
  },
  {
    index: 413,
    content: "Remain outside controlled airspace, expect joining clearance at time 55.",
    size: 100112,
    notes: "没有of",
  },
  {
    index: 414,
    content: "Request to leave controlled airspace by descent.",
    size: 56177,
  },
  {
    index: 415,
    content: "Request to leave controlled airspace by climb.",
    size: 53230,
  },
  {
    index: 416,
    content: "Descending to 5000 feet QNH 1014, report passing 7000 feet.",
    size: 100906,
  },
  {
    index: 417,
    content: "Request VMC descent to FL60.",
    size: 70692,
  },
  {
    index: 418,
    content: "Descending to FL60, maintain VMC FL90 to FL70, report traffic in sight at FL80.",
    size: 173855,
  },
  {
    index: 419,
    content: "Request join airway A1 at DAPRO.",
    size: 54967,
  },
  {
    index: 420,
    content: "Cleared to destination airport via DAPRO, flight planned route, FL240, join A1 at FL240.",
    size: 135530,
  },
  {
    index: 421,
    content: "Remain outside controlled airspace, expect further clearance at 55.",
    size: 90424,
    notes: "没有of",
  },
  {
    index: 422,
    content: "If FL240 not available, we accept FL220.",
    size: 89008,
  },
  {
    index: 423,
    content: "Cleared to leave A1 via BKM VOR, maintain FL230 while in controlled airspace.",
    size: 124010,
  },
  {
    index: 424,
    content: "Confirm we are under radar control.",
    size: 36176,
  },
  {
    index: 425,
    content: "Confirm radar service is terminated.",
    size: 43498,
  },
  {
    index: 426,
    content: "Radar service is terminated due technical failure. Maintain Mach number decimal 81 or less for separation.",
    size: 122831,
  },
  {
    index: 427,
    content: "Confirm radar control is resumed.",
    size: 39257,
  },
  {
    index: 428,
    content: "Radar control is resumed, track direct to BKM VOR and increase speed to Mach number decimal 84.",
    size: 119076,
  },
  {
    index: 429,
    content: "Affirm RVSM.",
    size: 30323,
  },
  {
    index: 430,
    content: "Negative RVSM due equipment downgraded.",
    size: 54228,
  },
  {
    index: 431,
    content: "Request clearance into RVSM airspace.",
    size: 51347,
  },
  {
    index: 432,
    content: "Unable RVSM due turbulence.",
    size: 46296,
  },
  {
    index: 433,
    content: "Ready to resume RVSM.",
    size: 31927,
  },
  {
    index: 434,
    content: "Position 42N(North)165E (East) at 0800, FL390, estimating 44 N 180E at 0900 45N 170W next.",
    size: 307316,
    hasLotOfInfo: true,
  },
  {
    index: 435,
    content: "At 150W(west) contact San Francisco Radio, primary 3494, secondary 11342.",
    size: 154894,
  },
  {
    index: 436,
    content: "At 144E(east) squawk 2000.",
    size: 73032,
  },
  {
    index: 437,
    content: "CPDLC connected.",
    size: 34801,
  },
  {
    index: 438,
    content: "Continue CPDLC make position report via CPDLC.",
    size: 79571,
  },
  {
    index: 439,
    content: "SELCAL CODE EFFG, request SELCAL check.",
    size: 114012,
  },
  {
    index: 440,
    content: "CPDLC unserviceable, request to revert to voice communication.",
    size: 85302,
  },
  {
    index: 441,
    content: "The air conditioning system has malfunctioned.",
    size: 36813,
  },
  {
    index: 442,
    content: "We have only one air conditioning pack operational. Request a new cruising level below FL300.",
    size: 80065,
  },
  {
    index: 443,
    content: "All our air conditioning packs have malfunctioned. Request rapid descent to MEA.",
    mismatch: "All our air conditioning packs has malfunctioned. Request rapid descent to MEA.",
    size: 59151,
  },
  {
    index: 444,
    content: "We had a malfunction of one air conditioning pack. Request descent to a lower level.",
    size: 75213,
  },
  {
    index: 445,
    content: "We have lost electrical power to the cabin air compressor. Request immediate descent to 10,000 feet.",
    size: 98411,
  },
  {
    index: 446,
    content: "We just had a smoke emergency. We need to depressurize the airplane to let in fresh air. Request rapid descent to 8000 feet.",
    size: 129673,
  },
  {
    index: 447,
    content: "We have unusual smell from air conditioning packs. Request stop climb at 7000 feet.",
    size: 86196,
  },
  {
    index: 448,
    content: "Many passengers are suffering from smoke inhalation. Request medical assistance on arrival.",
    size: 86517,
  },
  {
    index: 449,
    content: "Our pressurization system has malfunctioned.",
    size: 45996,
  },
  {
    index: 450,
    content: "We have difficulty in controlling the cabin pressure.",
    size: 45946,
  },
  {
    index: 451,
    content: "We have a cabin altitude problem.",
    size: 30954,
  },
  {
    index: 452,
    content: "Our cabin rate of climb has red-lined. Request immediate descent.",
    size: 59440,
  },
  {
    index: 453,
    content: "We have a slow cabin decompression. Request immediate descent.",
    size: 64531,
  },
  {
    index: 454,
    content: "Our cabin altitude at one time had reached 16000 feet. Some passengers have symptoms of hypoxia.",
    specialReading: "Our cabin altitude at one time had reached sixteen thousand feet. Some passengers have symptoms of hypoxia.",
    size: 108969,
  },
  {
    index: 455,
    content: "We are now depressurized and will fly a more shallow descent profile.",
    size: 67113,
  },
  {
    index: 456,
    content: "Request descent rate less than 500 feet per minute due to unpressurized cabin.",
    size: 79324,
  },
  {
    index: 457,
    content: "We are now ventilating with ram air. It is best that our rate of descent does not exceed 600 feet per minute.",
    size: 102599,
  },
  {
    index: 458,
    content: "We have a problem with the avionics ventilation system.",
    size: 57641,
  },
  {
    index: 459,
    content: "We have an avionics ventilation problem. The skin heat-exchangers and blower fan have failed.",
    size: 86325,
  },
  {
    index: 460,
    content: "The avionics ventilation is unserviceable. Request diversion to the closest suitable airport.",
    size: 91141,
  },
  {
    index: 461,
    content: "We have severe vibration coming from the avionics ventilation fan.",
    size: 50857,
  },
  {
    index: 462,
    content: "There are unusual noises coming from the avionics bay.",
    size: 35996,
  },
  {
    index: 463,
    content: "Our FMS has malfunctioned. Request radar vectors.",
    size: 41747,
  },
  {
    index: 464,
    content: "Request further climb due wind-shear.",
    size: 27117,
  },
  {
    index: 465,
    content: "Unable to maintain altitude, request leaving RVSM airspace.",
    size: 47263,
  },
  {
    index: 466,
    content: "We cannot make RNP approach due equipment.",
    size: 31525,
  },
  {
    index: 467,
    content: "Our navigation accuracy is low. Request to climb to minimum safe altitude.",
    size: 62366,
  },
  {
    index: 468,
    content: "We have a navigation map shift, unable to perform the RNAV approach. Request radar vectors.",
    size: 89554,
  },
  {
    index: 469,
    content: "Inertial reference system has failed. We are navigating on raw data. Request conventional approach.",
    size: 97153,
  },
  {
    index: 470,
    content: "The Morse code for the VOR is different from the approach chart. Confirm the VOR is fully operational.",
    size: 91944,
  },
  {
    index: 471,
    content: "The ILS signal seems to be very unstable. Did any other pilot report a similar situation?",
    size: 95669,
    notes: "seems to be very unstable有very",
  },
  {
    index: 472,
    content: "The approach lights for Runway 36L are a bit different from those shown on the airport diagram.",
    size: 94299,
  },
  {
    index: 473,
    content: "The flight path is unstable. Going around.",
    size: 39236,
  },
  {
    index: 474,
    content: "We made a missed approach due to unstable ILS signals.",
    size: 64436,
  },
  {
    index: 475,
    content: "The ILS signal was unstable. Request approach to another runway or request another type of approach.",
    size: 107060,
    notes: "was unstable过去式 / approach to",
  },
  {
    index: 476,
    content: "The DME indication is not correct. Confirm the DME is still in service.",
    mismatch: "The DME indication is not correct. Confirm the DME is still on service.",
    size: 86662,
  },
  {
    index: 477,
    content: "We have lost our flight plan after a flight management computer reset.",
    size: 72365,
  },
  {
    index: 478,
    content: "We need a few minutes to reprogram the flight management computers. Request radar vectors.",
    size: 82880,
  },
  {
    index: 479,
    content: "We need to reconfigure the flight management computers for approach. Request holding instructions.",
    size: 92069,
    notes: "For approach",
  },
  {
    index: 480,
    content: "We are now flying with basic navigation due to systems failure. Request radar vectors.",
    size: 89478,
  },
  {
    index: 481,
    content: "We have multiple failures on the inertial reference system. We are no longer able to fly oceanic route [raʊt]. Request return for landing.",
    size: 71825,
  },
  {
    index: 482,
    content: "We do not meet GPS approach requirement due to flight crew qualifications.",
    size: 44866,
  },
  {
    index: 483,
    content: "Our Airline policy does not allow us to perform CAT IIIC approach.",
    size: 39052,
  },
  {
    index: 484,
    content: "Our operations manual forbids this procedure.",
    size: 29688,
  },
  {
    index: 485,
    content: "Our Aviation Authority does not permit this procedure.",
    size: 32624,
  },
  {
    index: 486,
    content: "We are unable to conform to the noise abatement procedure due performance.",
    size: 36721,
  },
  {
    index: 487,
    content: "We are not qualified for CAT IIIB approach and auto-land. Request diversion.",
    size: 36501,
  },
  {
    index: 488,
    content: "Our VHF number One receiver has failed. We are no longer monitoring 121.5.",
    size: 51251,
  },
  {
    index: 489,
    content: "All stations, transmitting blind due to receiver failure.",
    size: 38637,
  },
  {
    index: 490,
    content: "All of our VHF transmitters have failed, now transmitting on HF radio. Please respond.",
    size: 52542,
  },
  {
    index: 491,
    content: "Our SELCAL has malfunctioned. We will continue monitoring your frequency.",
    size: 40540,
  },
  {
    index: 492,
    content: "We are receiving an ELT signal on 121.5.",
    size: 37581,
  },
  {
    index: 493,
    content: "We are picking up a broadcast signal on 121.5.",
    size: 32191,
  },
  {
    index: 494,
    content: "Our satellite phone is unserviceable. We are unable to call company operations.",
    size: 47748,
  },
  {
    index: 495,
    content: "Our data-link has malfunctioned. Request re-release the flight plan by voice.",
    size: 44116,
  },
  {
    index: 496,
    content: "Our data-link has malfunctioned. Request ATC clearance by voice.",
    size: 41637,
  },
  {
    index: 497,
    content: "My apologies, I wasn’t aware the boom mike was transmitting.",
    mismatch: "My apologies, I wasn’t aware that the boom mike was transmitting",
    size: 37185,
  },
  {
    index: 498,
    content: "Sorry for blocking the frequency due microphone jammed.",
    size: 32260,
  },
  {
    index: 499,
    content: "We have an electrical failure.",
    size: 17945,
  },
  {
    index: 500,
    content: "One of our generators has failed. At present moment, we are still able to continue to our destination.",
    size: 55223,
  },
  {
    index: 501,
    content: "Request diversion to the nearest suitable airport due AC BUS failure.",
    size: 47263,
  },
  {
    index: 502,
    content: "We are not supplying power to our DC BUS. Request priority landing.",
    size: 36381,
  },
  {
    index: 503,
    content: "We have a problem with the aircraft battery. Request priority landing.",
    size: 32714,
  },
  {
    index: 504,
    content: "One of our transformers has failed. I’ll let you know if a diversion is required.",
    size: 40715,
  },
  {
    index: 505,
    content: "Electrical system has a serious malfunction. Request radar vectors to an airport that’s within 20 minutes of flight time.",
    size: 65187,
  },
  {
    index: 506,
    content: "We are operating with only the emergency generator. Request track direct to final, Runway 26.",
    size: 57729,
  },
  {
    index: 507,
    content: "We are flying with batteries only. Is there any airport available within 25 minutes of flying?",
    size: 50308,
  },
  {
    index: 508,
    content: "If there is no airport within 100 miles, we have to make a forced landing.",
    size: 38517,
  },
  {
    index: 509,
    content: "We have less than 10 minutes of battery power left. We are preparing for ditching procedure.",
    size: 48715,
  },
  {
    index: 510,
    content: "We have switched off most of our electrical systems for smoke procedure. Request vectors for a long final, Runway 15.",
    size: 69866,
    notes: "没有radar",
  },
  {
    index: 511,
    content: "We have cut off the electrical system to the cabin and the onboard fire is under control.",
    size: 46364,
    notes: "有3个the",
  },
  {
    index: 512,
    content: "We had an electrical fire from the galley, now extinguished. Request return to land.",
    size: 45529,
  },
  {
    index: 513,
    content: "There was a fire from the avionics bay. Request radar vectors for final.",
    size: 41612,
  },
  {
    index: 514,
    content: "We have had a bird strike. Our windshield has cracked.",
    mismatch: "We have had a bird strike. Our windshield is cracked.",
    size: 35031,
  },
  {
    index: 515,
    content: "The windshield suddenly had electrical arcing. We need to pull the circuit breakers and delay the approach.",
    size: 52417,
  },
  {
    index: 516,
    content: "The cockpit side window is not sealed properly. Request reduce to minimum speed and descend to 4000 feet.",
    size: 74570,
  },
  {
    index: 517,
    content: "We had to go around due pilot seat moving. We’ll try to reset the circuit breaker before making another approach.",
    size: 57740,
  },
  {
    index: 518,
    content: "We have already discharged the engine extinguishers. The fire warning light is still on. Do you have a visual on our left engine?",
    size: 68898,
  },
  {
    index: 519,
    content: "We cannot extinguish the engine fire. Request priority landing and emergency services on arrival.",
    size: 59346,
  },
  {
    index: 520,
    content: "We have an APU fire warning. Can you verify if there is smoke coming from the back of the plane?",
    size: 93587,
  },
  {
    index: 521,
    content: "The APU fire seems to be extinguished. Request fire trucks on standby and stairs vehicle to disembark the passengers.",
    size: 76088,
  },
  {
    index: 522,
    content: "The APU is still on fire. We are evacuating. Request emergency services.",
    size: 47102,
  },
  {
    index: 523,
    content: "We had a cargo smoke warning. Advise the ground handlers NOT to open our cargo door until the passengers have all disembarked.",
    size: 54993,
  },
  {
    index: 524,
    content: "A passenger ignited the lavatory waste bin. Advise the airport police to await our arrival.",
    size: 51113,
    notes: "The",
  },
  {
    index: 525,
    content: "We have smoke coming out of our avionics bay. It is out of control. Request proceed direct to final and cancel all speed restrictions.",
    size: 69761,
  },
  {
    index: 526,
    content: "We have smoke coming from our avionics bay. We are evacuating. Request fire trucks.",
    size: 43657,
  },
  {
    index: 527,
    content: "We have smoke coming from our avionics bay. We are disembarking the passengers.",
    size: 42555,
  },
  {
    index: 528,
    content: "Request descent to 10000 feet to ventilate the aircraft due smoke.",
    specialReading: "Request descent to ten thousand feet to ventilate the aircraft due smoke.",
    size: 47101,
  },
  {
    index: 529,
    content: "We had emptied most of our fire extinguishers, but the cabin fire is still on.",
    size: 48002,
  },
  {
    index: 530,
    content: "We are having flight control problems.",
    size: 21252,
  },
  {
    index: 531,
    content: "Our flight control computers are not functioning well. We are having difficulty maintaining level flight, unable RVSM.",
    size: 63339,
    notes: "maintaining",
  },
  {
    index: 532,
    content: "Our pitch control has malfunctioned. We cannot move the elevators. We are flying the airplane with only trim.",
    size: 52759,
  },
  {
    index: 533,
    content: "The aircraft has a tendency to roll to the right. I need additional airspace to maneuver.",
    size: 54959,
    notes: "The aircraft不是airplane",
  },
  {
    index: 534,
    content: "We have finished the checklist but still cannot retract some of the speed brakes. Request the longest runway for landing.",
    size: 69778,
    notes: "只有这句和the thrust reverser有still cannot",
  },
  {
    index: 535,
    content: "We cannot fully extend the flaps. Request the longest runway for landing.",
    size: 46050,
  },
  {
    index: 536,
    content: "We have asymmetric flaps. Airplane is rolling to the left. Request holding to solve the problem.",
    size: 51075,
    notes: "airplane没有the",
  },
  {
    index: 537,
    content: "Request high speed approach. Part of our flight control surfaces have separated from the wing.",
    size: 56541,
  },
  {
    index: 538,
    content: "Request immediate climb above the minimum safe altitude to perform the checklist due to run-away trim condition.",
    size: 65849,
  },
  {
    index: 539,
    content: "Request vectors for long final. We are controlling the airplane with mechanical backup.",
    size: 40556,
    notes: "没有radar",
  },
  {
    index: 540,
    content: "Request return to FL250. We just had an air-upset situation and lost a lot of altitude.",
    mismatch: "Request to return to FL250. We just had an air-upset situation and lost a lot of altitude.",
    size: 63176,
  },
  {
    index: 541,
    content: "We have a problem with yaw damping. The aircraft is oscillating severely. Request diversion.",
    size: 46215,
    notes: "The aircraft",
  },
  {
    index: 542,
    content: "We have lost electrical power to some of the flight control actuators. Request delay our descent to perform checklist.",
    size: 59749,
  },
  {
    index: 543,
    content: "Some of our fuel pumps have low pressure. Request descent.",
    size: 34815,
  },
  {
    index: 544,
    content: "We have a problem with fuel temperature. Request holding position on the taxiway.",
    size: 38536,
  },
  {
    index: 545,
    content: "We are leaking fuel slowly. Request diversion.",
    size: 26927,
  },
  {
    index: 546,
    content: "We have a severe fuel leak situation, unable to reach the closest airport. You can expect us to make a forced landing near our present location.",
    size: 77528,
  },
  {
    index: 547,
    content: "Our cabin crew reports that we have fuel leak from the right wing. Request diversion to closest suitable airport.",
    size: 50240,
  },
  {
    index: 548,
    content: "We have already shut down engine Number One, but it is still leaking fuel near the pylon. Request emergency services.",
    size: 56583,
  },
  {
    index: 549,
    content: "The ground crew reports that we are leaking a bit of fuel from the bottom of the right engine nacelle. We are delaying taxi.",
    size: 55129,
  },
  {
    index: 550,
    content: "We need to continue to run the engines at our present location for a few minutes, will advise you shortly.",
    size: 54662,
  },
  {
    index: 551,
    content: "The ground crew reports that we are leaking a significant amount of fuel from the bottom of Number Three engine. We have just shut it down.",
    size: 60074,
  },
  {
    index: 552,
    content: "The fuel leak has stopped. But if a fire starts at any time, I will order an evacuation.",
    size: 48025,
  },
  {
    index: 553,
    content: "We have leaked a large amount of fuel onto the apron. Request fire trucks on standby and the stairs vehicle to disembark the passengers.",
    size: 63095,
    notes: "the stairs vehicle有the(只有这一句有)",
  },
  {
    index: 554,
    content: "We might have a fuel leak near the wing root. Request fire trucks on arrival.",
    size: 36856,
  },
  {
    index: 555,
    content: "We have fumes in the cabin, possibly due to a fuel leak. We are anticipating an immediate evacuation after landing.",
    mismatch: "We have fumes in the cabin, possible due to a fuel leak. We are anticipating an immediate evacuation after landing.",
    size: 62654,
  },
  {
    index: 556,
    content: "We are evacuating. Advise emergency personnel that fuel odors are still present in the cabin.",
    size: 47939,
    notes: "Advise emergency personnel",
  },
  {
    index: 557,
    content: "We are too heavy for landing. Request fuel-dump at the fuel dumping area.",
    size: 42633,
  },
  {
    index: 558,
    content: "Request climb for dumping fuel and vectors to the fuel dump zone.",
    size: 36352,
  },
  {
    index: 559,
    content: "We need about 18 minutes to jettison fuel before coming in for the approach.",
    size: 36597,
  },
  {
    index: 560,
    content: "We cannot shut off the fuel dump valve. Request radar vectors for short final, Runway 17.",
    size: 50012,
  },
  {
    index: 561,
    content: "We are indicating fuel filter clog. Request descent and to maintain high speed.",
    size: 63658,
  },
  {
    index: 562,
    content: "Our left engine failed due to fuel starvation.",
    size: 42108,
  },
  {
    index: 563,
    content: "We are near the freezing temperature of jet fuel. Request descent to FL 390.",
    size: 62570,
  },
  {
    index: 564,
    content: "We suspect there is contamination in our fuel tanks.",
    size: 45990,
  },
  {
    index: 565,
    content: "One of our hydraulic systems has exceeded temperature limits.",
    size: 50098,
  },
  {
    index: 566,
    content: "We have shut down one of the hydraulic systems.",
    size: 34374,
  },
  {
    index: 567,
    content: "The backup hydraulic system is operational but we still want to divert.",
    size: 45250,
  },
  {
    index: 568,
    content: "Our hydraulic systems have a malfunction. Request descent to lower levels to extend flaps in advance.",
    size: 73063,
  },
  {
    index: 569,
    content: "Our hydraulic fluid is dangerously low, possibly due to a leak. Request descent to lower levels to extend flaps.",
    size: 77219,
  },
  {
    index: 570,
    content: "Two of our hydraulic systems have failed. Request immediate diversion.",
    size: 46731,
  },
  {
    index: 571,
    content: "Our ram air turbine is not providing any hydraulic pressure. We are still operating on one hydraulic system only. Request diversion to the nearest suitable airport.",
    size: 88604,
  },
  {
    index: 572,
    content: "Request the longest runway and vectors for a wide downwind due to hydraulic failure.",
    size: 46313,
  },
  {
    index: 573,
    content: "We still have only one hydraulic system. Request the longest runway for landing.",
    size: 48991,
  },
  {
    index: 574,
    content: "Our left engine anti-ice system has failed. Request immediate climb to leave the icing area.",
    size: 75675,
  },
  {
    index: 575,
    content: "We must descend immediately to exit icing conditions. Our right engine bleed air has failed.",
    size: 68974,
    notes: "to exit",
  },
  {
    index: 576,
    content: "Both our windshield heating systems have failed. Ice is obstructing our view. Request latest airport weather.",
    size: 71443,
  },
  {
    index: 577,
    content: "We had electrical arcing on the windshield and pulled the circuit breakers according to the checklist. Will advise when ready for approach.",
    // mismatch: "We had electrical arcing on the windshield and pulled the circuit breakers according to the checklist. We will advise when ready for approach.",
    size: 68709,
  },
  {
    index: 578,
    content: "We performed the missed approach because my windshield wiper became inoperative and I could not see very well.",
    size: 54218,
  },
  {
    index: 579,
    content: "Our pitot static heating system has failed. We might have an altitude error.",
    size: 47712,
  },
  {
    index: 580,
    content: "We made the overshoot because of a stall warning, probably caused by a defective angle of attack probe.",
    size: 55924,
  },
  {
    index: 581,
    content: "I had to abort takeoff because I didn’t receive any airspeed indication.",
    size: 49811,
  },
  {
    index: 582,
    content: "We have an error in our airspeed. Request to climb to minimum safe altitude.",
    size: 45934,
  },
  {
    index: 583,
    content: "We have master warning lights in the cockpit. Request landing at the nearest suitable airport.",
    size: 53561,
  },
  {
    index: 584,
    content: "We have a master caution. I will notify you if a diversion is required.",
    size: 44740,
    notes: "前面是we后面是I",
  },
  {
    index: 585,
    content: "Some of our instruments are not indicating correctly. Request level off to perform checklist.",
    size: 55342,
  },
  {
    index: 586,
    content: "Two of our display units have failed. We are no longer RNP qualified. Request diversion.",
    size: 56171,
  },
  {
    index: 587,
    content: "We made the go around due to navigation accuracy downgrade.",
    size: 36905,
  },
  {
    index: 588,
    content: "We made the go around due to FMS position error.",
    size: 34476,
  },
  {
    index: 589,
    content: "We made the go around due to map drift on our navigation display.",
    size: 48410,
  },
  {
    index: 590,
    content: "We made the go around due to GPS error.",
    size: 27819,
  },
  {
    index: 591,
    content: "We made the go around due to lateral deviation exceedance.",
    size: 41663,
  },
  {
    index: 592,
    content: "We made the go around due to CDU failure.",
    size: 31401,
  },
  {
    index: 593,
    content: "We made the go around because we exceeded the vertical deviation limit.",
    size: 41078,
  },
  {
    index: 594,
    content: "We no longer have altitude warning. Request leaving RVSM airspace.",
    size: 50101,
  },
  {
    index: 595,
    content: "We have autopilot disconnection. We are no longer RVSM qualified. Request leaving RVSM airspace.",
    size: 73088,
  },
  {
    index: 596,
    content: "Our landing capability has degraded. Request terminate our approach.",
    size: 47665,
  },
  {
    index: 597,
    content: "Request to climb to minimum safe altitude due to malfunction of navigation computers.",
    size: 56384,
  },
  {
    index: 598,
    content: "We performed the go-around because we had a ground proximity warning.",
    size: 36603,
  },
  {
    index: 599,
    content: "We have conflicting traffic at one o’clock, 6 miles, descending. Request heading 130 for avoidance.",
    size: 73687,
  },
  {
    index: 600,
    content: "We have conflicting traffic at eleven o’clock, 8 miles, climbing. Request vectors for avoidance.",
    size: 58037,
    notes: "没有radar",
  },
  {
    index: 601,
    content: "Traffic at our twelve o’clock, 10 miles, climbing. Should we expedite our descent to cross altitudes?",
    mismatch: "Traffic at our twelve o’clock, 10 miles, climbing. Should we expedite or descent to cross altitudes?",
    size: 77739,
  },
  {
    index: 602,
    content: "Unable, TCAS RA.",
    size: 27043,
  },
  {
    index: 603,
    content: "We are clear of conflict. Request further instructions.",
    size: 37747,
  },
  {
    index: 604,
    content: "About twenty passengers and crew members were injured during the TCAS maneuver. Request diversion and medical assistance on arrival.",
    size: 84164,
  },
  {
    index: 605,
    content: "We are having abnormal engine indications. Request to reduce speed to 250 knots.",
    size: 63622,
  },
  {
    index: 606,
    content: "Our engine parameters are unstable. Request stop climb at FL220.",
    size: 60095,
  },
  {
    index: 607,
    content: "Our oil pressure reading is lower than normal. Request hold at present position.",
    size: 47706,
  },
  {
    index: 608,
    content: "The oil temperature is higher than normal. We are monitoring other engine parameters.",
    size: 45809,
  },
  {
    index: 609,
    content: "Engine indicates high EGT at idle power setting. We need to have partial thrust in the descent. Request an early descent.",
    size: 88246,
  },
  {
    index: 610,
    content: "We are reading high engine vibration. Request to delay takeoff.",
    size: 43557,
    notes: "delay takeoff没有our，只有descent和approach有",
  },
  {
    index: 611,
    content: "Cabin altitude is increasing abnormally. Request to level off.",
    size: 43478,
  },
  {
    index: 612,
    content: "Our instruments indicate excessive high cabin altitude.",
    size: 46431,
  },
  {
    index: 613,
    content: "Our instrument indicates abnormal cabin pressure differential.",
    mismatch: "Our instruments indicating abnormal cabin pressure differential.",
    size: 44105,
  },
  {
    index: 614,
    content: "Our fuel endurance is 48 minutes. We must leave the hold otherwise we will be at minimum fuel.",
    size: 71857,
  },
  {
    index: 615,
    content: "Cockpit oxygen cylinder pressure is low. Request to return for landing.",
    size: 53190,
  },
  {
    index: 616,
    content: "We are holding at present position. It appears one of the over-wing exits has unlocked.",
    size: 59997,
  },
  {
    index: 617,
    content: "It seems some of the spoilers cannot be retracted. We have to re-calculate our landing distance before we start our approach, standby.",
    size: 86887,
  },
  {
    index: 618,
    content: "We have an indication that the nose wheel did not extend properly. Request low pass for visual check.",
    size: 64614,
  },
  {
    index: 619,
    content: "We have lost our braking. We used thrust reversers to stop the aircraft. Request ground services to chock the nose wheel.",
    size: 83252,
  },
  {
    index: 620,
    content: "Our brakes have seized. The tyres might burst during touchdown. Request fire trucks on arrival.",
    size: 72504,
    notes: "Our brakes / The tires",
  },
  {
    index: 621,
    content: "We made the go-around because our landing gear wouldn't extend normally. Request holding pattern to perform checklist.",
    size: 65028,
  },
  {
    index: 622,
    content: "We have exhausted all options. We will land without the nose gear fully locked.",
    size: 54418,
  },
  {
    index: 623,
    content: "We cannot extend the left landing gear. Request foaming the runway.",
    size: 46468,
  },
  {
    index: 624,
    content: "Request diversion to a nearby airport with foaming capability.",
    size: 41331,
  },
  {
    index: 625,
    content: "We applied maximum braking when we rejected takeoff. Request fire services to escort the aircraft back to the apron.",
    size: 74997,
  },
  {
    index: 626,
    content: "The tyres are deflated. We will have to hold at present position for maintenance inspection.",
    size: 56386,
  },
  {
    index: 627,
    content: "I think we blew a nose wheel tyre. Request holding position.",
    size: 40664,
  },
  {
    index: 628,
    content: "We no longer have airspeed and altitude on our primary displays.",
    size: 40910,
  },
  {
    index: 629,
    content: "We have errors with our navigation. Request radar monitoring.",
    size: 43647,
  },
  {
    index: 630,
    content: "Our inertial reference system has failed, unable GPS approach. Request ILS or VOR approach.",
    size: 73305,
    notes: "ILS在前",
  },
  {
    index: 631,
    content: "We made the go around because the GPWS warning was triggered.",
    size: 40615,
  },
  {
    index: 632,
    content: "We have to recalibrate our instruments. Request to level off and maintain heading.",
    size: 45120,
  },
  {
    index: 633,
    content: "Our ADS-B transmitter appears to be malfunctioning. Terminating further ADS-B transmissions.",
    size: 69181,
  },
  {
    index: 634,
    content: "ADS-B equipment degradation, will advise when able to resume operations.",
    size: 53852,
  },
  {
    index: 635,
    content: "GPS unreliable, terminating ADS-B transmissions.",
    size: 44734,
  },
  {
    index: 636,
    content: "Our ADS-B has malfunctioned. Is there any weather advisory at our destination?",
    size: 53286,
  },
  {
    index: 637,
    content: "We made an overshoot because our ADS-B indicated a possible runway incursion.",
    size: 48762,
  },
  {
    index: 638,
    content: "We made a go-around due to head-up display problem. We’ll inform you when we are ready for the approach.",
    size: 47938,
  },
  {
    index: 639,
    content: "Our airspeed is unreliable. Request climb to minimum safe altitude to perform checklist.",
    mismatch: "Our airspeed is unreliable. Request climb to maintain safe altitude to perform checklist.",
    size: 57243,
  },
  {
    index: 640,
    content: "Our airspeed is unreliable. Request radar vectors for long final.",
    size: 40158,
  },
  {
    index: 641,
    content: "We made the go-around because the radio altimeter triggered flare mode.",
    size: 43307,
  },
  {
    index: 642,
    content: "Our weather radar has failed and we are in IMC. Request return for landing.",
    size: 50874,
  },
  {
    index: 643,
    content: "Our weather radar has malfunctioned. What is the highest available level for cruise?",
    size: 46714,
    notes: "有available",
  },
  {
    index: 644,
    content: "Our weather radar has failed. How did the preceding aircraft deviate from the weather?",
    size: 48950,
  },
  {
    index: 645,
    content: "We do not have that route [raʊt] in our database. Which heading should we maintain for now?",
    size: 43357,
  },
  {
    index: 646,
    content: "We do not have that runway in our database. Request delay our descent while we program the CDU.",
    size: 60618,
  },
  {
    index: 647,
    content: "We have a navigation malfunction. Request diversion to a suitable airport that has less complex terrain.",
    size: 67469,
  },
  {
    index: 648,
    content: "Our oxygen pressure is dropping rapidly. Request to fly heading 050 and descent to FL180 to escape from the mountainous area.",
    mismatch: "Our oxygen pressure is dropping rapidly. Request to fly heading 050 and descent to FL180 to escape from the mountainous terrain.",
    size: 94484,
  },
  {
    index: 649,
    content: "The NOTAM says the ILS is unserviceable, but we are still picking up the Morse Code, confirm it is still in operation.",
    size: 78514,
  },
  {
    index: 650,
    content: "We have an engine failure. Following ETOPS procedure, request descent to FL200, maintain high speed and proceed direct to alternate airport.",
    size: 100432,
  },
  {
    index: 651,
    content: "We cannot provide oxygen to the passengers as we are not sure where the smoke is coming from.",
    size: 56549,
  },
  {
    index: 652,
    content: "Many passengers have suffered from smoke inhalation. Request medical services.",
    size: 60095,
  },
  {
    index: 653,
    content: "There was heavy smoke in the cabin before we ventilated the aircraft. Request medical assistance for passengers after landing.",
    mismatch: "There was heavy smoke in the cabin before we ventilated the aircraft. Request medical assistance for the passengers after landing.",
    size: 72053,
    notes: "注意the",
  },
  {
    index: 654,
    content: "The aircraft is depressurized. We are descending. Confirm 10,000 feet is enough to clear terrain until we reach our alternate.",
    size: 78548,
  },
  {
    index: 655,
    content: "We are no longer getting bleed air from the right engine. Request immediate descent to leave the icing area.",
    size: 57902,
  },
  {
    index: 656,
    content: "Our APU bleed air malfunctioned during engine startup. We are calling the ground staff, standby.",
    size: 58263,
  },
  {
    index: 657,
    content: "We are expediting descent to enable a windmill startup. Request further descent.",
    size: 55852,
  },
  {
    index: 658,
    content: "We are unable to restart engine number one with bleed air. Request high speed for a windmill air start.",
    size: 58460,
    notes: "restart",
  },
  {
    index: 659,
    content: "Both engine bleed air systems have failed and we are relying on APU bleed for air conditioning. Request descent to 14, 000 feet.",
    size: 80989,
  },
  {
    index: 660,
    content: "We have no bleed air coming from either engines or APU. Request rapid descent to 10,000 feet.",
    size: 60731,
    notes: "有coming",
  },
  {
    index: 661,
    content: "We are leaking bleed air. Request turn right heading 095 to avoid the icing area.",
    size: 66412,
  },
  {
    index: 662,
    content: "CPDLC has malfunctioned. We are reverting to voice communication.",
    size: 51172,
  },
  {
    index: 663,
    content: "Disregard my last CPDLC request for climb. We have a system problem and will maintain present level for now.",
    size: 84001,
  },
  {
    index: 664,
    content: "CPDLC terminated due to failure, reverting to voice communication.",
    size: 56125,
  },
  {
    index: 665,
    content: "We just had an APU fire warning, and discharged the fire extinguisher, Request visual check if there is smoke coming from our tail section.",
    size: 84281,
  },
  {
    index: 666,
    content: "Another aircraft has seen a lot of smoke coming from our APU. We are evacuating. Request emergency services.",
    size: 72265,
    notes: "有coming",
  },
  {
    index: 667,
    content: "We are at bay 15. We have an APU fire. Request fire services.",
    size: 55322,
  },
  {
    index: 668,
    content: "We have a generator failure and cannot start our APU at this altitude. Request descent to perform APU startup.",
    size: 83522,
  },
  {
    index: 669,
    content: "A passenger has opened an over-wing emergency exit. The slide has deployed. Request to cancel our slot time.",
    size: 68413,
  },
  {
    index: 670,
    content: "A passenger tried to unlock the cabin door in flight, the cabin crew restrained him. Request airport police on arrival.",
    size: 64327,
  },
  {
    index: 671,
    content: "We have an abnormal noise coming from one of our cabin doors. Request rapid descent to 5000 feet.",
    size: 63003,
    notes: "有coming",
  },
  {
    index: 672,
    content: "Smoke is coming from the cabin floor. We are performing an evacuation. All slides have been deployed.",
    size: 62933,
    notes: "是performing不是ordering",
  },
  {
    index: 673,
    content: "We had a smoke warning from the forward cargo hold. We are evacuating.",
    size: 39646,
  },
  {
    index: 674,
    content: "We have a cargo smoke warning. We are disembarking passengers. Request fire services.",
    size: 54321,
    notes: "disembarking没有the",
  },
  {
    index: 675,
    content: "We have smoke coming from our avionics bay. Advise the fire fighters that it might be an electrical fire.",
    size: 64035,
    notes: "Coming from our不是out of",
  },
  {
    index: 676,
    content: "The cockpit windshield has cracked. Request descent to FL220.",
    size: 51960,
  },
  {
    index: 677,
    content: "The windshield is cracked on the outside. Request descent.",
    size: 43914,
  },
  {
    index: 678,
    content: "Neither of us can see through our windshield. Does your airport permit auto-land?",
    size: 50521,
  },
  {
    index: 679,
    content: "Our thrust lever is not responsive. We cannot reduce thrust on engine Number One. Request holding.",
    size: 62285,
  },
  {
    index: 680,
    content: "Our engine control has malfunctioned. We cannot get much thrust. Request immediate descent.",
    size: 60824,
  },
  {
    index: 681,
    content: "We have a thrust reverser opened in flight. We cannot maintain this level. Request immediate descent.",
    size: 69443,
  },
  {
    index: 682,
    content: "We still cannot retract the thrust reverser. Our approach speed will be higher than normal. Request vectors for the longest Runway.",
    size: 79651,
    notes: "只有这句和some of the speed brakes有still cannot" + "\n没有radar",
  },
  {
    index: 683,
    content: "We aborted takeoff due loss of engine oil pressure.",
    size: 36815,
  },
  {
    index: 684,
    content: "We have an engine oil leak. Request diversion.",
    size: 33445,
  },
  {
    index: 685,
    content: "We have a low oil pressure warning from engine Number Two. Request diversion.",
    size: 44227,
  },
  {
    index: 686,
    content: "Engine Number One has a temperature problem. Request holding to perform checklist.",
    size: 48711,
  },
  {
    index: 687,
    content: "Our EGT continues to be above the maximum limit. Request descent. We might shut down engine Number Two shortly.",
    size: 81529,
  },
  {
    index: 688,
    content: "We have performed our procedures but engine vibration still exists. Request diversion.",
    size: 55678,
    notes: "but engine vibration",
  },
  {
    index: 689,
    content: "The engine vibration is now causing the airplane to shake violently. We are shutting down our engine Number Three.",
    size: 64347,
  },
  {
    index: 690,
    content: "We’ve made a visual inspection of engine Number Two from the cabin. The engine cowling has fallen off.",
    size: 60488,
  },
  {
    index: 691,
    content: "Engine Number Three has smoke coming out of the pylon section. We are evacuating.",
    size: 50253,
  },
  {
    index: 692,
    content: "Ground vehicle has collided with our engine nacelle. Maintenance work is needed before flight. Request cancel our airway clearance.",
    size: 77523,
  },
  {
    index: 693,
    content: "The Number Two engine has been shut down. We are no longer able to maintain level flight. Request descent to FL200.",
    size: 71386,
    notes: "第一句有The，第二句是We",
  },
  {
    index: 694,
    content: "The uncontained engine failure has caused parts of the fuselage to be damaged. Request emergency descent.",
    size: 62920,
  },
  {
    index: 695,
    content: "Our left engine has ingested FOD. We are shutting down engines and holding position.",
    size: 55105,
  },
  {
    index: 696,
    content: "There is a huge gaping hole in the aisle, somehow the cabin floor has been punctured. We are re-seating passengers. Request holding.",
    size: 84964,
  },
  {
    index: 697,
    content: "We have abnormal noise coming from the mid section of our fuselage, somewhere near the ceiling. Request descent and reduce speed.",
    size: 88642,
  },
  {
    index: 698,
    content: "We heard an explosion from the cabin. Request to stop climb.",
    size: 46718,
  },
  {
    index: 699,
    content: "We are unsure about the cause of the explosion. There are injuries in the cabin. We’ll give you an update as soon as possible.",
    size: 83752,
  },
  {
    index: 700,
    content: "Some passengers have cuts and burn wounds due onboard explosion. Request diversion and medical services upon arrival.",
    size: 81835,
  },
  {
    index: 701,
    content: "Ice is accumulating rapidly on the wings and fuselage. Request emergency descent to 6000 feet.",
    size: 94431,
    notes: "这次积冰是紧急下降",
  },
  {
    index: 702,
    content: "We are encountering moderate icing. Request immediate descent.",
    size: 53087,
    notes: "immediate不是rapid",
  },
  {
    index: 703,
    content: "We made a diversion due to reports of freezing rain at our original destination.",
    size: 62550,
    notes: "除了frontal weather and freezing rain这句话，其他都是reports of freezing rain没有单独用的",
  },
  {
    index: 704,
    content: "We are on emergency descent due severe icing.",
    size: 47781,
  },
  {
    index: 705,
    content: "We are encountering clear ice. Request immediate right turn to heading 130.",
    size: 67664,
  },
  {
    index: 706,
    content: "Rime ice was reported by previous aircraft during approach.",
    size: 45431,
  },
  {
    index: 707,
    content: "We cannot continue holding in icing conditions. Request descent immediately and cancel speed restrictions.",
    size: 103502,
  },
  {
    index: 708,
    content: "We have a “Wind-shear Ahead” warning message. Request to delay takeoff or change to another runway.",
    size: 74268,
    notes: "delay takeoff没有our，只有descent和approach有",
  },
  {
    index: 709,
    content: "We have a “Wind-shear Ahead” warning. Request to delay our approach.",
    size: 45742,
  },
  {
    index: 710,
    content: "We made the go around due to wind-shear warning.",
    size: 32760,
  },
  {
    index: 711,
    content: "We have received information of a new volcanic eruption. Will it affect our route?",
    size: 59527,
  },
  {
    index: 712,
    content: "We are unsure of our position due heavy fog. We are holding position.",
    size: 48887,
  },
  {
    index: 713,
    content: "We had a rapid airspeed decay due turbulence. Request immediate descent to FL390.",
    size: 81673,
  },
  {
    index: 714,
    content: "We had to descend immediately due to wind-shear at our cruise level. We didn’t have time to request descent as the frequency was busy.",
    size: 94339,
    notes: "只有这句是cruise level其他都是cruising level",
  },
  {
    index: 715,
    content: "The airplane began to buffet when climbing through FL380. We had to stop climb immediately to increase airspeed.",
    size: 93170,
  },
  {
    index: 716,
    content: "We are flying near our maximum altitude. We cannot maintain airspeed in this turbulence. Request immediate descent.",
    size: 85295,
  },
  {
    index: 717,
    content: "I apologize for the level bust, but we needed the altitude loss to recover from wind-shear.",
    size: 65019,
  },
  {
    index: 718,
    content: "We encountered heavy rain and had a temporary flame out on our right engine. Request immediate climb.",
    size: 71296,
  },
  {
    index: 719,
    content: "We won’t have to deviate if you allow us to climb to FL430.",
    size: 49664,
  },
  {
    index: 720,
    content: "The thunderstorms will last for about 40 minutes according to the weather update. Request diversion.",
    size: 69225,
  },
  {
    index: 721,
    content: "We have encountered severe clear air turbulence. Request immediate descent.",
    size: 68058,
  },
  {
    index: 722,
    content: "Request a general heading of 050 due to multiple cells ahead.",
    size: 56214,
  },
  {
    index: 723,
    content: "We have stopped on Runway 23 and will remain on the runway due heavy fog. I say again, we are still on the runway.",
    size: 85137,
  },
  {
    index: 724,
    content: "There is heavy drifting fog. We think it is no longer safe to taxi. Request to hold at present position.",
    size: 75396,
  },
  {
    index: 725,
    content: "Frontal weather is quickly moving in from the west. If the holding is more than 10 minutes, we will have to divert.",
    size: 74894,
  },
  {
    index: 726,
    content: "We made the go-around because strong convective currents on short final made our approach unstable.",
    size: 75929,
  },
  {
    index: 727,
    content: "There was temperature inversion when we descended through 3000 feet. Our airspeed dropped suddenly by 25 knots.",
    size: 87360,
  },
  {
    index: 728,
    content: "We performed the missed approach below the minimum because of advection fog. We could no longer see the runway lights.",
    size: 80795,
    notes: "below the minimum只有这一句里出现",
  },
  {
    index: 729,
    content: "The latest weather says that frontal weather and freezing rain is now stationary over the airport. Request diversion.",
    size: 86071,
    notes: "frontal是the latest weather，snow storm是the latest weather at out destination",
  },
  {
    index: 730,
    content: "We can’t find any gaps for at least 100 miles in the squall line covering our arrival route. Request diversion.",
    size: 84138,
  },
  {
    index: 731,
    content: "We can see dust swirls approaching the airport and we’re concerned about low level wind-shear. Request holding.",
    size: 81914,
  },
  {
    index: 732,
    content: "The latest SIGMET says a super-cell thunderstorm is developing at our destination. Is our flight affected?",
    size: 91852,
  },
  {
    index: 733,
    content: "Request to continue our flight. Our ETA is in two hours and maybe the airport will have the runways cleared of snow by then.",
    size: 85023,
  },
  {
    index: 734,
    content: "We had to make a quick heading change due ice pellets. You didn’t answer our request so we squawked 7700 and made the heading change.",
    size: 102404,
  },
  {
    index: 735,
    content: "We were struck by hail. Our airframe is severely damaged. Request emergency services.",
    size: 91851,
  },
  {
    index: 736,
    content: "We have just encountered a lightning strike. Some of our instruments have erroneous indications. Request diversion to the nearest suitable airport.",
    size: 113921,
  },
  {
    index: 737,
    content: "We have had a lightning strike. So far no system seems to be affected. We will continue to our destination.",
    size: 83290,
  },
  {
    index: 738,
    content: "Roger heavy rain. Request to terminate our approach.",
    size: 41871,
  },
  {
    index: 739,
    content: "Request to cancel our approach. The runway is not long enough and there are water patches.",
    size: 58977,
  },
  {
    index: 740,
    content: "Request to cancel our approach. Braking action is poor and we’re concerned about hydroplaning during rollout.",
    size: 72012,
  },
  {
    index: 741,
    content: "Request holding instructions. We’ll attempt another approach when the rain showers become lighter.",
    size: 77065,
  },
  {
    index: 742,
    content: "We have received reports of freezing rain ranging from ground up to 5000 feet. Request diversion.",
    size: 87290,
    notes: "除了frontal weather and freezing rain这句话，其他都是reports of freezing rain没有单独用的",
  },
  {
    index: 743,
    content: "We have observed blowing sand in the vicinity of the airport. How long will this last?",
    size: 71580,
  },
  {
    index: 744,
    content: "A sandstorm is forecast to reach the airport within 20 minutes. We won’t get airborne by then. Request cancel startup and tow back to the gate.",
    size: 124209,
  },
  {
    index: 745,
    content: "Heavy blowing snow is expected to last for another 30 minutes. Request to terminate approach and holding instructions.",
    size: 108633,
  },
  {
    index: 746,
    content: "Runway is covered with patches of ice. Braking action is medium to poor.",
    size: 71813,
  },
  {
    index: 747,
    content: "Ice patches are covering the runway mostly along the runway edge. Uncontaminated runway width is about 30 meters.",
    size: 102449,
  },
  {
    index: 748,
    content: "A dissipating thunderstorm is ahead of us. We are near the zero-degree isotherm. Request deviate an additional 10 miles to the right.",
    size: 113654,
  },
  {
    index: 749,
    content: "We have a visual on a tornado at our 10 o’clock, about 2 miles. Request immediate right turn.",
    size: 78459,
    notes: "12、1、10点(只有10点的tornado)有our, 其他没有",
  },
  {
    index: 750,
    content: "The weather forecast says that the typhoon along our route will be intensifying. Request change our airway clearance.",
    size: 93745,
    notes: "台风是the weather forecast says",
  },
  {
    index: 751,
    content: "The hurricane has gathered in strength and will affect all airports at the south coast. Request diversion.",
    size: 97500,
  },
  {
    index: 752,
    content: "A Pilot overflying reported seeing virga above the runways. Request to terminate our approach.",
    size: 96665,
  },
  {
    index: 753,
    content: "Request immediate one eighty turn to the right due volcanic ash.",
    size: 65167,
  },
  {
    index: 754,
    content: "We have entered volcanic ash. Our radios and engines are not working properly, now heading 235, and descending to FL 220, squawking 7700.",
    size: 165035,
    notes: "只有这句话的descending有and",
  },
  {
    index: 755,
    content: "We are landing into the sun in heavy haze. Can you turn on the approach lights to maximum intensity?",
    size: 89890,
  },
  {
    index: 756,
    content: "Lining up Runway 35. Runway lights are too bright. Request to dim the runway lights.",
    size: 75308,
  },
  {
    index: 757,
    content: "There are red lights ahead of us. Confirm taxi instructions.",
    size: 56997,
  },
  {
    index: 758,
    content: "There is an obstruction ahead. Confirm taxi instructions.",
    size: 66497,
  },
  {
    index: 759,
    content: "The NOTAM says this part of the taxiway is closed during this period, please verify.",
    size: 85552,
  },
  {
    index: 760,
    content: "The follow-me vehicle is leading us to taxiway L3. Our wings will not clear the other airplanes on this narrow taxiway. We are stopping.",
    size: 117722,
  },
  {
    index: 761,
    content: "We are stopping. The ground marshaller is still guiding us in, but I think my engine will hit the boarding bridge if we taxi any further.",
    size: 103424,
  },
  {
    index: 762,
    content: "We are stopping taxi. The boarding bridge is not at its designated position.",
    size: 68353,
  },
  {
    index: 763,
    content: "We are shutting down our engines. There are boxes blown by the wind toward our aircraft.",
    size: 71205,
  },
  {
    index: 764,
    content: "We had difficulty starting up our engines due strong tailwind. Request to change our pushback position facing west.",
    size: 112988,
  },
  {
    index: 765,
    content: "Another aircraft has collided with us. I’ll command an evacuation as soon as we both turn off our engines.",
    size: 94363,
    notes: "前面是us后面是I",
  },
  {
    index: 766,
    content: "The tow bar has been bent. Our maintenance crew will inspect our nose wheel. Holding position.",
    size: 72985,
  },
  {
    index: 767,
    content: "The tug has swung around and collided with our forward fuselage. We are shutting down engines. Request stairs vehicle and shuttle bus.",
    size: 115026,
  },
  {
    index: 768,
    content: "A catering truck collided with our aft fuselage. There are fumes in the cabin and we are quickly disembarking all passengers. Request fire services.",
    size: 129419,
    notes: "disembarking all passengers",
  },
  {
    index: 769,
    content: "The flaps were extended inadvertently and hit the fuel truck. We are disembarking all onboard personnel. Request fire services.",
    size: 122303,
    notes: "disembarking all onboard personnel",
  },
  {
    index: 770,
    content: "Our airplane nose has now lifted off the ground due to improper load and balance. Request ground maintenance.",
    size: 89093,
    notes: "有now",
  },
  {
    index: 771,
    content: "We have discovered leakage of dangerous goods in the cargo hold. Can you alert hazardous material specialists?",
    size: 98412,
  },
  {
    index: 772,
    content: "Our cabin crew will direct all passengers to stay outside the runway after evacuation.",
    size: 78346,
    notes: "outside the runway不是out side of",
  },
  {
    index: 773,
    content: "The outer main landing gear might have rolled over runway lights when we made the one eighty turn. Request personnel to inspect.",
    size: 84772,
  },
  {
    index: 774,
    content: "We have a suspicious bag on board. Request bomb squad.",
    size: 60071,
  },
  {
    index: 775,
    content: "The passengers are evacuating. The bomb is still on board.",
    size: 58632,
  },
  {
    index: 776,
    content: "A passenger has assembled a bomb in the lavatory. He is making threats. Request emergency services.",
    size: 106565,
  },
  {
    index: 777,
    content: "Request a remote apron for parking our aircraft due bomb on board.",
    size: 55570,
  },
  {
    index: 778,
    content: "We have had a tail strike. Request to stop climb at 3000 feet and return for landing.",
    size: 86462,
  },
  {
    index: 779,
    content: "We have veered off the runway due asymmetric thrust. We are evacuating. Request emergency assistance.",
    size: 95483,
  },
  {
    index: 780,
    content: "We cannot get good climb profile due engine problems. Request maintain runway heading.",
    size: 75070,
  },
  {
    index: 781,
    content: "We made a very hard landing. We’ll need maintenance inspection before our next flight. Suggest you check the runway touchdown zone.",
    size: 97874,
  },
  {
    index: 782,
    content: "The center of gravity is disturbed. We will relocate passengers prior to approach. Request holding.",
    size: 85476,
  },
  {
    index: 783,
    content: "Request a large airspace to maneuver due flight control problems.",
    size: 62167,
  },
  {
    index: 784,
    content: "My apologies for the deviation due the wrong altitude setting. Request further instructions.",
    size: 79905,
    notes: "没有to",
  },
  {
    index: 785,
    content: "My apologies for the level deviation. We were caught in a strong updraft.",
    size: 59929,
  },
  {
    index: 786,
    content: "We used too much speed brakes and penetrated our level. Did we cause any conflict?",
    size: 68169,
  },
  {
    index: 787,
    content: "We were not informed of a frequency change. I will now monitor your frequency.",
    size: 67240,
    notes: "前面是we后面是I",
  },
  {
    index: 788,
    content: "Unable visual approach due company policy. Request radar vectors.",
    size: 57633,
  },
  {
    index: 789,
    content: "Unable circling approach due company policy. Request diversion.",
    size: 60184,
  },
  {
    index: 790,
    content: "Are we being vectored too close to the parallel aircraft?",
    size: 46668,
  },
  {
    index: 791,
    content: "Is the preceding aircraft crossing our altitude?",
    size: 47810,
  },
  {
    index: 792,
    content: "I can read you, but I’m not sure you can hear me. I will squawk ident to comply with your instructions.",
    size: 80314,
    notes: "hear不是read",
  },
  {
    index: 793,
    content: "I see wildfire at my 10 o’clock, about 8 miles.",
    size: 53836,
  },
  {
    index: 794,
    content: "I have heard an aircraft in distress but no one’s responding. I can help relay his message.",
    size: 82118,
  },
  {
    index: 795,
    content: "Message relay: The aircraft in distress will ditch in the ocean. His present coordinate is One Eight Degrees, One Five Minutes, North, One Six Zero Degrees, Five Two Minutes East.",
    size: 164485,
  },
  {
    index: 796,
    content: "The aircraft in distress says he will attempt to force land in an area about ten miles Northeast of his position.",
    size: 97941,
  },
  {
    index: 797,
    content: "Request offset 10 miles left to avoid the reported strong downdraft.",
    size: 67509,
  },
  {
    index: 798,
    content: "Request diversion. The latest weather at our destination suggests snow storm will last for 5 hours.",
    size: 104312,
    notes: "frontal是the latest weather，snow storm是the latest weather at out destination suggests",
  },
  {
    index: 799,
    content: "Our radar shows a strong echo from the thunderstorm ahead. Request immediate right turn to avoid it.",
    size: 79077,
  },
  {
    index: 800,
    content: "Request immediate one-eighty turn to the right due to possible hail ahead.",
    size: 60878,
  },
  {
    index: 801,
    content: "We have three serious and five minor injuries on board. Request ambulances on arrival.",
    size: 77829,
  },
  {
    index: 802,
    content: "One passenger is having difficulty breathing. Request descent to a lower level to reduce cabin altitude.",
    size: 80183,
  },
  {
    index: 803,
    content: "A passenger activated the overhead emergency oxygen generator. Request airport security on arrival to detain this individual.",
    size: 104940,
  },
  {
    index: 804,
    content: "A stressed passenger attempted to open an emergency exit. Request airport security on arrival.",
    size: 85990,
  },
  {
    index: 805,
    content: "We have a hostage situation. Request stair vehicles on standby to disembark the passengers.",
    size: 94560,
    notes: "只有这一句是stair vehicles，其他的都是stairs vehicle或者the stairs vehicle",
  },
  {
    index: 806,
    content: "We have a passenger with severe hyperventilation. He has received first aid but his condition is not improving. Request ambulance on arrival.",
    specialReading: "We have a passenger with severe hyperventilation. He has received first aid but his condition isn't improving. Request ambulance on arrival.",
    size: 126403,
  },
  {
    index: 807,
    content: "We have a passenger with a suspected heart attack. Request diversion to a suitable airport.",
    size: 74020,
  },
  {
    index: 808,
    content: "A pregnant passenger is in severe pain. Request priority landing and ambulance on arrival.",
    size: 78343,
  },
  {
    index: 809,
    content: "There was a fight onboard among a few passengers. One of them is now bleeding seriously. Request police and ambulances on arrival.",
    size: 100491,
  },
  {
    index: 810,
    content: "The purser told me the injured passenger has blood type O. Maybe this information is useful to the paramedics.",
    size: 92143,
  },
  {
    index: 811,
    content: "We have an 8-month old infant with head injuries. Request ambulance on arrival.",
    size: 65783,
  },
  {
    index: 812,
    content: "A passenger is unconscious after suffering from seizure. The cabin crew is giving her first aid. We will advise if we require a diversion.",
    size: 115799,
  },
  {
    index: 813,
    content: "Many passengers and crew were injured due severe turbulence. We will advise the number and severity of injuries when able.",
    size: 101480,
  },
  {
    index: 814,
    content: "An elderly passenger has passed away. We will continue to our destination. Request ambulance on arrival.",
    size: 84105,
  },
  {
    index: 815,
    content: "We found a passenger unconscious from a drug overdose in the lavatory. Request police and ambulance on arrival.",
    size: 87495,
  },
  {
    index: 816,
    content: "The sick passenger’s condition has improved. We no longer require the diversion. Request to continue to our destination.",
    size: 96587,
  },
  {
    index: 817,
    content: "We received an emergency call from the cabin, but now nobody is responding. We can hear shouting and disturbance. Our cabin crew might be under duress.",
    size: 133427,
  },
  {
    index: 818,
    content: "We have a hijack situation on board. Can our destination airport provide armed intervention?",
    size: 81958,
  },
  {
    index: 819,
    content: "We can see two masked men with sharp weapons on our cockpit door surveillance camera. They are kicking the cockpit door.",
    size: 95399,
  },
  {
    index: 820,
    content: "I can see the area outside of the cockpit. There are two hijack suspects standing in the aisle.",
    size: 86184,
  },
  {
    index: 821,
    content: "One of the terrorists is about forty-year old. He is about 180 cm tall, wearing a brown shirt and dark pants.",
    specialReading: "One of the terrorists is about fortyyears old. He is about a hundred and eighty centimeters tall, wearing a brown shirt and dark pants.",
    size: 99854,
  },
  {
    index: 822,
    content: "A terrorist is trying to access the cockpit. He is about 30 years old. He is wearing a hat and backpack.",
    size: 86291,
  },
  {
    index: 823,
    content: "The purser reports there are over ten hijackers onboard. They are threatening to kill passengers if we don’t fly to another destination.",
    size: 89365,
  },
  {
    index: 824,
    content: "Some of the hijackers are carrying sharp protruding weapons.",
    size: 53708,
  },
  {
    index: 825,
    content: "There is a stand-off in the cabin. Some of the hijackers are carrying blades.",
    size: 67441,
  },
  {
    index: 826,
    content: "Terrorists started to injure passengers.",
    size: 43681,
  },
  {
    index: 827,
    content: "We will remain on the runway. The hijackers have taken four hostages to the rear of the cabin.",
    size: 67499,
  },
  {
    index: 828,
    content: "Terrorists are threatening to start killing passengers and the crew.",
    size: 56897,
  },
  {
    index: 829,
    content: "The air marshal and passengers have restrained five suspects. The situation is now under control.",
    size: 89448,
  },
  {
    index: 830,
    content: "A suspicious suitcase was found during the cabin inspection.",
    size: 61202,
  },
  {
    index: 831,
    content: "The air marshal is searching the aircraft interior for any suspicious articles.",
    size: 65813,
  },
  {
    index: 832,
    content: "Some explosives were discovered behind a panel near the back of the cabin.",
    size: 61443,
  },
  {
    index: 833,
    content: "What do the bomb-disposal experts suggest we do?",
    size: 47815,
  },
  {
    index: 834,
    content: "The cabin crew reports a passenger is behaving strangely.",
    size: 50666,
  },
  {
    index: 835,
    content: "A bomb has exploded and the cabin is full of smoke. Request emergency descent.",
    size: 71468,
  },
  {
    index: 836,
    content: "We are evacuating on the runway. Be advised the bomb is still on board.",
    size: 67837,
  },
  {
    index: 837,
    content: "We are unsure of our position due to navigation failure. If any station can hear me, please respond.",
    size: 85773,
  },
  {
    index: 838,
    content: "We only have standby magnetic compass due instrument failure. Now heading 245. Request navigation assistance.",
    size: 110476,
  },
  {
    index: 839,
    content: "We are unsure of our position due FMS failure. Last known position five miles north of FUPAD, now heading 165 for weather avoidance.",
    size: 136721,
  },
  {
    index: 840,
    content: "We have navigation map drift. Request climb to MEA.",
    size: 56464,
  },
  {
    index: 841,
    content: "Our cargo manifest shows that there are 80 kilograms of lithium batteries on board.",
    size: 66744,
  },
  {
    index: 842,
    content: "A ramp inspection discovered crates of lithium batteries in the cargo hold. We are verifying. Request delay pushback.",
    size: 89522,
  },
  {
    index: 843,
    content: "We had a smoke warning in the cargo hold. We have discharged the fire extinguisher. We are concerned about lithium batteries in that compartment.",
    size: 91891,
  },
  {
    index: 844,
    content: "The cabin crew have used up all the portable extinguishers. Request diversion.",
    size: 58645,
  },
  {
    index: 845,
    content: "Request passenger stairs connect immediately after we stop on the runway. We want to disembark passengers as quickly as possible.",
    size: 103149,
    notes: "disembark passengers",
  },
  {
    index: 846,
    content: "We almost had a mid-air collision with another aircraft.",
    size: 41508,
  },
  {
    index: 847,
    content: "The conflicting traffic is military. Request avoiding action.",
    size: 47885,
  },
  {
    index: 848,
    content: "Does the flight path of the unknown aircraft converge with ours?",
    size: 51182,
  },
  {
    index: 849,
    content: "The conflicting traffic is gray, possibly a military aircraft.",
    size: 47259,
  },
  {
    index: 850,
    content: "We have traffic indication at 2 o’clock, 300 feet above our level.",
    size: 50664,
    notes: "12、1、10点(只有10点的tornado)有our, 其他没有",
  },
  {
    index: 851,
    content: "We have a possible traffic conflict at 10 o’clock, converging with our flight path.",
    size: 50315,
    notes: "12、1、10点(只有10点的tornado)有our, 其他没有",
  },
  {
    index: 852,
    content: "We have a possible traffic conflict ahead. Request radar vectors for avoidance.",
    size: 63685,
  },
  {
    index: 853,
    content: "Request right turn for traffic avoidance.",
    size: 35144,
  },
  {
    index: 854,
    content: "Unable to comply, TCAS RA.",
    size: 33717,
  },
  {
    index: 855,
    content: "We nearly collided with that aircraft. We had very little vertical separation. Do you know the flight number of that aircraft?",
    size: 74554,
  },
  {
    index: 856,
    content: "Clear of conflict, request further instructions.",
    size: 44079,
  },
  {
    index: 857,
    content: "We have injuries resulting from our TCAS maneuver. Request ambulance on arrival.",
    size: 67743,
  },
  {
    index: 858,
    content: "Some of the cabin crew are injured. They were serving meals during the TCAS maneuver.",
    size: 60238,
  },
  {
    index: 859,
    content: "Some passengers were injured because their seatbelts weren’t fastened.",
    mismatch: "Some of the passengers were injured because their seatbelts weren’t fastened.",
    size: 52862,
  },
  {
    index: 860,
    content: "Some passengers have been scalded by hot drinks.",
    size: 47007,
  },
  {
    index: 861,
    content: "We have about thirty injured persons on board, four are very serious. Can you deliver this message to the medical staff that are standing by?",
    size: 114323,
  },
  {
    index: 862,
    content: "We overran the runway end. We are evacuating. Request emergency services.",
    size: 66148,
  },
  {
    index: 863,
    content: "We veered off the runway. We are evacuating near the runway and rapid exit J5.",
    size: 71826,
  },
  {
    index: 864,
    content: "We will reach our minimum fuel if we are delayed any further.",
    size: 44299,
  },
  {
    index: 865,
    content: "We are declaring minimum fuel. We will have less than 30 minutes endurance by the time we get to our destination.",
    size: 84153,
  },
  {
    index: 866,
    content: "We are declaring fuel emergency. Our endurance is 1 hour 58 minutes. We are 1 hour 30 minutes from the closest alternate airport.",
    size: 116907,
  },
  {
    index: 867,
    content: "We are declaring fuel emergency. Request priority landing Runway 03R.",
    size: 66958,
  },
  {
    index: 868,
    content: "We have been intercepted by a military aircraft. It is rocking its wings to indicate we should follow.",
    size: 81635,
  },
  {
    index: 869,
    content: "I’m trying to identify the type and nationality of the military aircraft. So far, no response on 121.5.",
    size: 96050,
  },
  {
    index: 870,
    content: "The military aircraft is commanding us to land at the airfield below.",
    size: 58478,
  },
  {
    index: 871,
    content: "The military aircraft has made an abrupt maneuver indicating we may continue on this heading.",
    size: 67646,
  },
  {
    index: 872,
    content: "We are being escorted towards the national boundary by two military aircraft.",
    size: 60614,
  },
  {
    index: 873,
    content: "We are heading 085. This heading allows us to quickly exit the prohibited airspace.",
    size: 84621,
  },
  {
    index: 874,
    content: "If we continue to make orbits we will exceed our duty time limit by the time we land.",
    size: 69546,
  },
  {
    index: 875,
    content: "A crew member is incapacitated. Request diversion and medical assistance.",
    size: 70856,
  },
  {
    index: 876,
    content: "They have revived the unconscious passenger by CPR procedure. It looks like he’ll be fine. Request to cancel the diversion.",
    size: 107079,
  },
  {
    index: 877,
    content: "Confirm we are being vectored to fly overhead the airport for right downwind.",
    size: 60310,
  },
  {
    index: 878,
    content: "Confirm we have enough separation from preceding aircraft.",
    size: 50100,
  },
  {
    index: 879,
    content: "Unable to expedite climb due performance.",
    size: 38865,
  },
  {
    index: 880,
    content: "Negative contact due visibility.",
    size: 30376,
  },
  {
    index: 881,
    content: "Unable, we are in IMC.",
    size: 32577,
  },
  {
    index: 882,
    content: "Unable, we are only authorized during daytime VMC.",
    size: 51022,
  },
  {
    index: 883,
    content: "Unable noise abatement due company policy.",
    size: 43664,
  },
  {
    index: 884,
    content: "Did the previous controller tell you about our problem during radar handoff?",
    size: 53439,
  },
  {
    index: 885,
    content: "Is there a frequency change at this compulsory reporting point?",
    size: 49204,
  },
  {
    index: 886,
    content: "Unable speed 180 knots. We need to maintain a good speed in clean configuration due icing.",
    size: 91698,
  },
  {
    index: 887,
    content: "Unable to reduce speed below mach decimal 74. You can vector us if you’d like.",
    size: 69994,
  },
  {
    index: 888,
    content: "Request runway change for departure due high crosswind.",
    size: 43221,
  },
  {
    index: 889,
    content: "Request delay the approach due tail wind beyond limits.",
    size: 47771,
  },
  {
    index: 890,
    content: "Request holding instructions due weather near the runway threshold.",
    size: 55459,
  },
  {
    index: 891,
    content: "Unable, an immediate right turn might not give us enough terrain clearance. Our turn radius is 4 miles at this speed.",
    size: 98848,
  },
  {
    index: 892,
    content: "Sorry, there was a problem with my audio equipment. How do you read me now?",
    size: 50707,
  },
  {
    index: 893,
    content: "We had to overshoot because of wake turbulence.",
    size: 40632,
  },
  {
    index: 894,
    content: "Not ready for immediate takeoff due possible wake turbulence from departing heavy aircraft.",
    size: 64224,
  },
  {
    index: 895,
    content: "Unable CAT II approach due crew qualification.",
    size: 44443,
  },
  {
    index: 896,
    content: "Transmission blocked, say again.",
    size: 31821,
  },
  {
    index: 897,
    content: "Standby, high pilot workload.",
    size: 30647,
  },
  {
    index: 898,
    content: "Are you banning us from entry because of our airline or our aircraft type?",
    size: 60209,
  },
  {
    index: 899,
    content: "Our aircraft has the required certification and is approved by your Civil Aviation Authority for scheduled flight.",
    size: 89356,
  },
  {
    index: 900,
    content: "We had to go around due to unstable approach.",
    size: 39575,
  },
];

export default contents;
