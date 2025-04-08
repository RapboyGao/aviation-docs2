export interface PepecStory {
  index: number;
  content: string;
  translation: string;
}

export const stories: PepecStory[] = [
  {
    index: 1,
    content: `AFR123 crashed at Singapore Changi Airport during takeoff.
The tower controller instructed the crew to takeoff on Runway 02L,
but the crew lined up runway 02R and began their takeoff rolling.
The aircraft overran the runway and crashed.
Crew members and 110 passengers were killed,
and the co-pilot was badly wounded.
According to the investigation, there were three reasons for the accidents.
First of all, the crew didn’t use effective methods to verify their position.
Secondly, the crew forgot to check whether they were on the correct runway or not.
Finally, the crew members' idle chatting during the taxi resulted the loss of situation awareness.`,
    translation: `AFR123在新加坡樟宜机场起飞时坠毁。
塔台管制员指示机组人员从02L跑道起飞，但机组人员在02R跑道排队，并开始滑跑起飞。
飞机冲出跑道坠毁了。
机组人员和110名乘客遇难，副驾驶严重受伤。
根据调查，这些事故有三个原因。
首先，机组人员没有使用有效的方法来验证他们的位置。
第二，机组人员忘记检查他们是否在正确的跑道上。
最后，机组人员在滑行时闲聊导致情景意识丧失。
`,
  },
  {
    index: 2,
    content: `An A320 collided with a B737 during taxi.
The right ailerons of B737 was severely damaged but A320 only had minor damage on left wing.
Luckily, there were no injuries.
After receiving taxi instruction, the A320 began to pass the B737 from the right side.
The captain of A320 thought they had enough room.
But unfortunately, two aircraft collided together.
Both captains reported the collision immediately.
Because the Boeing aircraft was damaged seriously, fuel leakage was reported and fire services were required.
Fortunately, the fuel leak didn’t develop into fire.
The crew of the Boeing aircraft complained that they just parked stationary with the parking brakes when they were hit.`,
    translation: `一架A320在滑行过程中与一架B737相撞。
B737的右副翼严重受损，而A320的左副翼仅轻微受损。
幸运的是，没有人受伤。
在接到滑行指令后，A320开始从右侧超越B737。
A320的机长认为他们有足够的空间。
但不幸的是，两架飞机相撞了。
两名机长立即报告了相撞事件。
由于这架波音飞机严重受损，报告说有燃油泄漏，并要求提供消防服务。
幸运的是，燃油泄漏没有发展成火灾。
这架波音飞机的机组人员抱怨说，他们明明只是设置了刹车，停在原地，什么事儿也没干，就被撞了。
`,
  },
  {
    index: 3,
    content: `A pilot of Air China airline told us an event with landing gear problem.
After normal push-back, start-up and taxi, he requested takeoff.
However, he was instructed to hold short of the runway in order to give way to ACA702 on final.
ACA702 declared emergency because of landing gear problem.
ACA702 asked for a low pass.
The controller verified the landing gear was still in up position.
Then ACA702 requested a touch and go to jar the jammed gear.
Unfortunately, the landing gear still couldn’t be extended.
So, ACA702 had to make a belly landing on a foamed runway.
There were no casualties except some minor injuries.`,
    translation: `国航的一名飞行员告诉了我们一起关于起落架问题的事件。
在正常的推出、开车和滑行后，他请求起飞。
然而，他被指示在跑道外等待，以便给五边的ACA702让路。
不过，ACA702因为起落架问题宣布进入紧急状态，并且请求低空通场，管制员证实起落架仍在收上位。
然后ACA702请求飞一个连续起飞去把起落架震动下来。
但是，起落架仍然没放下来。
因此，ACA702必须要做一个机腹着陆，并且跑道要铺泡沫。
除了一些人员受到轻伤外，没有人员伤亡。
`,
  },
  {
    index: 4,
    content: `When the pilot initially contacted the tower controller, he was told the Runway Visual Range was 500m.
The pilot executed a missed approach because of no contact at minima.
Then, he was given radar vectors for a second ILS approach.
In the second approach, the controller issued landing clearance at outer marker.
One minute later, the controller observed the airplane was leaving the glide path on the radar display and issued missed approach instructions again.
There was no further reply from the pilot.
The airplane impacted a building and crashed.
According to the investigation, the poor visibility made the pilot nervous and he misunderstood the missed approach instructions and made a wrong turn.
    `,
    translation: `当飞行员最初联系塔台管制员时，他被告知跑道视程为500米。
由于最低高度跑道不可见，飞行员执行了复飞。
之后，管制员雷达引导进行第二次盲降进近。
在第二次进近中，管制员在外指点标处发布了着陆许可。
一分钟后，管制员在雷达屏幕上观察到飞机正在偏离下滑道，所以他再次发出复飞指令。
后来再没有收到飞行员的回复。
飞机撞上建筑物，坠毁了。
据调查，低能见度让飞行员变得非常紧张，他误解了复飞指令，转弯出现失误。
`,
  },
  {
    index: 5,
    content: `A Delta Airline aircraft departed from Shanghai to Seoul. 
It carried 256 passengers and 13 crew members on board. 
During takeoff rolling, an unknown foreign object was sucked into port engine and the engine fire warning light illuminated. 
Then the flight crew declared an emergency right after airborne and completed the emergency checklist procedure. 
Through good communication, the controller understood the flight crew wanted to return to land. 
But the pilot had to dump fuel before landing because the aircraft was overweight to land. 
So the controller vectored the aircraft to the dumping area. 
After circling over the sea and dumping fuel for almost one hour, the plane returned to land safely.`,
    translation: `达美航空一架飞机从上海飞往首尔。
机上载有256名乘客和13名机组人员。
在起飞滑跑过程中，左发吸进不明异物，发动机火警警示灯亮起。
随后，机组人员在升空后立即宣布紧急情况，并完成了紧急检查单程序。
通过沟通，管制员了解到机组人员想要返回着陆。
但由于飞机超重，飞行员不得不在降落前放油。
所以管制员引导飞机到了放油区。
在海上盘旋并放了近一个小时的油后，飞机安全降落。
`,
  },
  {
    index: 6,
    content: `The crew of flight 523 found a traffic 20 miles at FL 294 right ahead of the airplane on TCAS at FL 290 near LAMEN. 
The captain reported to Shanghai Control immediately, but the controller responded that there was no indication on his radar screen and there had not been any flight advisory. 
The captain then instructed the crew to turn left and found the conflicting traffic closing to the flight path and a TCAS warning was initiated. 
The crew then immediately turns right for avoidance, disengage the autopilot and descended to a lower altitude. 
The crew reported to the controller about the conflict after the conflict had been cleared.`,
    translation: `523航班的机组人员，在FL294，他们在TCAS上发现飞机正前方20英里处有航空器冲突，该航空器在LAMEN附近的FL290上。
机长立即向上海管制报告，但管制员回应称，他的雷达屏幕上没有显示任何迹象，也没有任何飞行警告。
机长随后指示机组人员左转，发现冲突交通接近航线，并发出TCAS警告。
机组人员随即右转避让，解除自动驾驶并下降到较低的高度。
在冲突解除后，机组人员向管制员报告了冲突。
`,
  },
  {
    index: 7,
    content: `An United aircraft experienced an in-flight engine fire during departure climb from New York City. 
During the return to the departure airport, the nose landing gear failed to extend, and the flight crew was instructed to execute a go-around, during which the crew extended the nose gear using the emergency procedure. 
The flight crew conducted an emergency landing, and the 2 flight crew members, 3 flight attendants, and 138 passengers deplaned on the runway. 
No occupant injuries were reported, but the airplane sustained substantial damage from the fire. 
The NTSB determines that the probable cause of this accident was the inappropriate manual engine-start procedure used by maintenance personnel. 
(108 words)`,
    translation: `美联航一架飞机，在从纽约起飞爬升时，飞机发动机起火。
在返回起飞机场期间，前起落架未能放出，空管指示机组人员执行复飞，在此期间，机组人员使用紧急程序放下了前起落架。
之后，机组人员执行了紧急降落，2名机组人员、3名空乘人员和138名乘客在跑道上下机。
没有乘客受伤，但飞机在火灾中遭受了重大损失。
美国国家运输安全委员会认为，这起事故的可能原因是维修人员使用了不适当的手动启动引擎的程序。
`,
  },
  {
    index: 8,
    content: `A China Southern aircraft lost a left upper wing trailing edge panel during cruise at FL270. 
Initially, ATC received a pilot report that the flight crew had experienced "light chop". 
The flight was en route from Greenyard to Blueyard Airport. 
The broken panel struck the window of passenger row 19ABC and cracked only the outer portion of the window. 
Pressurization was not lost. 
The flight crew continued on to Blueyard. 
Upon approach to Blueyard, ATC instructed the flight crew to expedite for separation. 
the flight crew informed ATC that they could not increase their airspeed due to possible airframe damage. 
The flight landed safely. 
There were 174 passengers and 6 crew members with no reported injuries.`,
    translation: `中国南方一架飞机在FL270巡航飞行时失去左上翼后缘面板。
最初，空中交通管制中心收到飞行员报告，称机组人员当时经历了“轻度颠簸”。
该航班正在从格林亚德机场飞往Blue机场的途中。
破碎的面板砸在19排ABC座椅的窗户上，庆幸地是，只打碎了窗户的外层。
没有发生释压。
机组人员继续前往Blue机场。
在接近Blue机场时，由于间隔问题，空管指示机组人员加速。
机组人员通知空中交通管制，由于机身可能损坏，他们无法提高空速。
最后，飞机安全着陆了。
机上有174名乘客和6名机组人员，没有受伤报告。
`,
  },
  {
    index: 9,
    content: `An Airbus 320 collided with an ERJ 145 during taxi in the run-up area of runway 19. 
The right aileron of the ERJ was seriously damaged; the left winglet of the Airbus had minor damage. 
There were no injuries. 
The captain of the Airbus reported that he was positioned to the right of the ERJ. 
ATC cleared him for departure, which required him to taxi past the ERJ. 
He stated that he checked the proximity of the ERJ, and it looked like he could clear it and then felt the impact. 
The captain notified ATC of the collision. 
Airport fire crews responded, but there was no fuel leak or fire.`,
    translation: `一架空客320在19号跑道的试车区滑行时与一架ERJ145相撞。
ERJ右副翼严重受损；这架空客飞机的左小翼有轻微损坏。
没有人员伤亡。
空客机长报告说，他的位置在ERJ的右侧。
管制允许他们起飞，要求他们滑行通过ERJ。
他说他检查了ERJ的附近区域，看起来空间足够让飞机通过，可是没想到还是撞上了。
机长向管制通报了相撞事件。
机场消防人员做出了反应，但没有发生燃油泄漏或火灾。
`,
  },
  {
    index: 10,
    content: `Before the first ILS approach, the pilot was advised that the runway visual range was 600 feet, then he was given a landing clearance. 
The pilot declared a missed approach and was given radar vectors for a second ILS approach. 
After turning inbound on the localizer, the pilot was advised the runway visual range and then cleared to land. 
When the tower controller observed the airplane turning to the south of the runway, she issued missed approach instructions. 
There was no further reply from the pilot. 
The airplane impacted a tall tree and collided on the ground. 
According to the investigation, the pilot misinterpreted the missed approach instructions by making the right turn and then led to the accident. 
`,
    translation: `在第一次盲降进近前，飞行员被告知跑道视距为600英尺，然后他得到了着陆许可。
飞行员宣布复飞，并得到雷达引导进行第二次盲降进近。
在转向对准航向道后，飞行员被告知跑道视距，然后获准着陆。
塔台管制员观察到飞机转向跑道南面时，发布了复飞指令。
飞行员没有进一步的答复。
飞机撞上了一棵大树，撞向地上。
据调查，飞行员错误理解了复飞指令，右转导致了事故。
`,
  },
  {
    index: 11,
    content: `A Boeing 757 and a Bombardier were seriously damaged when the tails of both airplanes collided during the pushback. 
The flight crew of the Bombardier reported that they were in a stopped position and their ground crew was in the process of disconnecting the tug. 
Company maintenance personnel stated they were pushing the 757 back and did not see the Bombardier. 
Communication recordings between ground control and both airplanes revealed that the 757 was cleared for pushback from gate 80. 
Later, the Bombardier was cleared to push back from gate 79. 
The ground controller did not advise either aircraft of simultaneous adjacent pushback operations and did not forecast a traffic conflict. 
(111 words)`,
    translation: `一架波音757和一架庞巴迪飞机的尾部在推出过程中相撞，严重受损。
庞巴迪的机组人员报告说，当时地面人员正在断开拖车时，飞机处于停止状态。
波音公司的维修人员表示，那时他们正在将757推出，并没有看到庞巴迪飞机。
地面管制和两架飞机之间的通话记录显示，这架757被允许从80号机位推出。
后来，庞巴迪飞机获准从79号机位推出。
管制员没有通知两架飞机存在相近机位同时进行的操作，也没有通知飞机有冲突航空器的存在。
`,
  },
  {
    index: 12,
    content: `Air France 551 departed runway 15R and over flew United 83 at Atlantic Airport. 
The tower controller had cleared United 83 to land on runway 10 when the aircraft was about 6 miles on final approach. 
Simultaneously, ATC cleared Air France 551 for takeoff on runway 15R. 
Air France 551 was on taxiway when the takeoff clearance was issued. 
The pilots rotated at taxiway and over flew United 83 at the intersection of runways 10 and 15R. 
United 83 exited runway 10 afterwards. 
The main cause of this incident is local controller's failure of maintaining awareness of the situation and failing to provide the appropriate separation between the two aircraft on intersecting runways.`,
    translation: `法航551号班机从15R跑道起飞，飞越了降落在大西洋国际机场10跑道上的美联航83。
塔台管制员允许联合航空83在五边进近时降落在10号跑道上，当时飞机距离机场约6海里。
同时，管制员允许法航551在15R跑道起飞。
起飞许可发布时，法航551正在滑行道上。
飞行员在滑行道上滑跑，在10号跑道和15R跑道的交叉口飞过联合航空83。
联航83号班机随后离开10号跑道。
此次事故的主要原因是当地管制员未能保持情景意识，未能在交叉跑道上为两架飞机提供适当的间隔。
`,
  },
  {
    index: 13,
    content: `The Piper and Cessna pilots were inbound to the same airport. 
The Cessna pilot was directed to enter a left downwind, then flew south before turning southwest. 
The Piper pilot was also directed to enter a left downwind. 
The controller noticed two VFR targets close to one another. 
Assuming the target on a southwest heading was a VFR helicopter when it was actually the Cessna. 
The controller issued conflict traffic to the southbound aircraft, assuming it was the Cessna pilot when it was actually the Piper pilot, and the Cessna pilot acknowledged the traffic call. 
Later, the Piper pilot informed the controller of the collision and declared an emergency.`,
    translation: `派珀飞机和塞斯纳飞机的飞行员降落在同一个机场。
塞斯纳飞行员被指示进入左三边，然后向南飞行，然后转向西南。
派珀飞行员也被指示进入左三边。
管制员注意到两个目视飞行规则的航空器彼此靠近。
以为西南方向的是一架按目视规则飞行的直升机，而实际上是塞斯纳。
管制员向向南飞行的飞机发出了冲突呼叫，以为是塞斯纳飞机，但实际上是派珀飞机，塞斯纳的飞行员认收这一信号。
后来，派珀飞行员通知管制员发生冲突，并宣布进入紧急状态。
`,
  },
  {
    index: 14,
    content: `When SIA128 was approaching the airspace of Chicago center area control, the controller instructed the flight crew to change radio frequency for the next sector on 132.1. 
The first officer acknowledged the frequency change and read back the correct frequency. 
However, the flight crew did not contact ATC on the new frequency. 
Because the controllers in the receiving units were preparing for a shift change, they didn't know that flight 128 did not establish radio contact, 30 minutes later, the controller at the next sector identified SIA128 on the radar. 
Although they attempted to establish contact with the airplane by calling the company dispatcher, they got no response from the pilots. 
The controller finally regained contact with SIA128 on the emergency frequency 50 minutes later.`,
    translation: `当新航128接近芝加哥中心区管制空域时，管制员指示机组人员将无线电频率调到下一个扇区132.1。
副驾驶确认了频率的变化，并把正确的频率复诵了出来。
然而，机组人员并没有在新的频率上联系到管制员。
由于接收的人员正在准备换班，他们不知道128航班没有建立联系，30分钟后，下一个扇区的管制员在雷达上识别出了新航128。
虽然他们试图通过呼叫公司调度员与飞机建立联系，但没有得到飞行员的回应。
50分钟后，管制员终于通`,
  },
  {
    index: 15,
    content: `Landing light signal could provide useful information to controllers. 
One day, a B757 vacated runway 36L via taxiway A9 after landing. 
It was then cleared to cross runway 36R. 
But it stopped taxiing on taxiway A9 between runway 36L and runway 36R. 
The tower controller attempted to contact the pilot but received no reply. 
He saw the aircraft landing lights were also off. 
This made him believe that the B757 had a radio failure and had not received the clearance to cross runway 36R. 
So he issued takeoff clearance to A320 on runway 36R. 
Suddenly, the controller noticed the B757’s lights came on and it began to move. 
Realizing the risk of runway incursion, he canceled A320's takeoff clearance immediately.`,
    translation: `着陆灯可以作为信号向管制员发送有用信息。
一天，一架B757在降落后经由滑行道A9脱离36左跑道。
随后飞机获准穿越36右跑道。
但它在36左和36右跑道之间的A9滑行道上停止滑行。
塔台管制员试图联系飞行员但没有得到回复。
他看到飞机着陆灯也关闭了。
他猜想B757遇无线电故障，没有收到穿越36右跑道的许可，所以他给A320发布了起飞许可，使用跑道36右。
突然，管制员注意到B757的着陆灯亮了并开始移动。
管制员意识到跑道有被入侵的危险，于是立即取消了A320的起飞许可。
`,
  },
  {
    index: 16,
    content: `It was a foggy day, Flight 626 was cleared to taxi to runway 36R. 
Later, the ground controller gave start-up clearance to a Cessna pilot. 
Then he requested Flight 626 to contact Tower controller. 
From then on, those two aircraft were on two different frequencies. 
The Cessna started to taxi, but the pilot entered wrong taxiway. 
The ground controller did not realize it and cleared the Cessna to continue taxi. 
At the same time, the Tower controller cleared Flight 626 for takeoff. 
When the Flight 626 was rolling on the runway, the Cessna crossed the runway holding sign and entered the active runway 36R. 
Unfortunately, the two aircraft collided, all people on board died. 
`,
    translation: `那天有雾，626航班获准滑到36R跑道。
后来，地面管制员给了塞斯纳飞行员开车许可。
然后他要求626航班联系塔台管制员。
从那时起，这两架飞机在两个不同的频率上飞行。
塞斯纳飞机开始滑行，但飞行员进入了错误的滑行道。
地面管制员没有意识到这一点，允许塞斯纳继续滑行。
与此同时，塔台管制员批准626航班起飞。
当626航班在跑道上滑跑时，塞斯纳越过跑道等待标志，进入活动跑道36R。
不幸的是，两架飞机相撞，机上人员全部遇难。
`,
  },
  {
    index: 17,
    content: `The tower controller cleared Flight 145 to land on runway 22. 
But he forgot the arriving aircraft when he cleared Flight 101 to take off from the intersecting runway 16. 
After Flight 145 touched down, the ground radar system alerted. 
The controller tried to instruct Flight 145 to stop short of runway 16. 
However, the aircraft just managed to stop in the middle of the intersection. 
It was impossible for Flight 101 to abort takeoff. 
So Flight 101 made an early liftoff and flew over Flight 145. 
The two aircraft missed colliding by only 50 feet. 
There were no injuries or damage to either aircraft. 
But it was regarded as the most serious incident of this kind.`,
    translation: `塔台管制员允许145航班降落在22号跑道上。
但是当他允许101航班从16号交叉跑道起飞时，他忘记了即将进场的飞机。
145航班着陆后，地面雷达系统发出警报。
管制员试图指示145航班在16号跑道外停止。
然而，飞机只是在跑道交叉口的中间停了下来。
101航班无法中止起飞。
所以101航班提前离地飞，从145航班上方飞过。
两架飞机只差50英尺就撞上了。
两架飞机都没有人员伤亡或损坏。
但这被认为是这类事件中最严重的一次。
`,
  },
  {
    index: 18,
    content: `When an Flight 815 was approaching the terminal area of its destination, the flight crew contacted the Approach and requested ILS approach for runway 12. 
Because of the tailwind conditions, the controller advised the pilot to make a circling approach for runway 30. 
But the flight crew insisted to land on runway 12 and the controller cleared them to land on that runway. 
The runway was wet and the braking action was not good. 
During landing, the aircraft skidded to the right side of the runway. 
The fuselage was broken into three pieces, the right engine and right main gear were separated from the aircraft. 
No one was killed, but many passengers suffered from serious injuries.`,
    translation: `当815航班接近目的地终端区时，机组人员联系进近，要求盲降进近12号跑道。
由于顺风，管制员建议飞行员在30号跑道作盘旋进近。
但是机组人员坚持降落在12号跑道上，管制员允许他们降落在那条跑道上。
跑道很湿，刹车效果也不好。
在着陆时，飞机滑到跑道的右侧。
机身断成三块，右发动机和右主起落架与飞机分离。
没有人死亡，但许多乘客受了重伤。
`,
  },
  {
    index: 19,
    content: `Flight 456 with 152 passengers and 9 crews was flying to land at Tokyo Airport. 
When it was transferred from Tokyo Control to Tokyo Approach, the pilot was instructed to proceed to DA to hold because of traffic congestion. 
During the holding, the pilot was informed that the local weather was deteriorating and the controller suggested the crew to divert to the alternate, but the pilot reported that their fuel was not enough. 
So the controller vectored the crew to land at runway 34R. 
Unfortunately, the pilot couldn’t stabilize on the localizers due wind shear. 
The aircraft went around and made a second approach. 
Later, it crashed into a hillside due to fuel shortage.`,
    translation: `载有152名乘客和9名机组人员的456航班正飞往东京机场降落。
当飞机从东京管制中心转到东京进近时，由于交通拥堵，飞行员被指示转到DA等待。
在等待期间，飞行员被告知当地天气正在恶化，管制员建议机组人员备降，但飞行员报告说他们的燃油不足。
所以管制员指示机组人员降落在34R跑道。
不幸的是，由于风切变，飞行员无法在航向道上稳定。
飞机复飞，进行第二次降落。
后来，由于燃油短缺，飞机坠毁在山坡上。
`,
  },
  {
    index: 20,
    content: `A Boeing 747 performed the flight from Taiwan to Hongkong carrying 206 passengers and 19 crew members on board. 
It broke up and crashed, killing all those on board. 
It is the deadliest air disaster in Taiwan. 
After careful investigation, scientists found the full story of the crash. 
About 20 years ago, the plane landed heavily and damaged the skin on its tail. 
Instead of replacing the whole skin in accordance with the maintenance guidelines, the airlines only covered the area with a piece of aluminum plate and painted it. 
This cause a buildup of metal fatigue in the area. 
For the following 22 years, maintenance crews had not noticed anything unusual.`,
    translation: `一架波音747从台湾飞往香港，机上载有206名乘客和19名机组人员。
飞机解体坠毁，机上人员全部遇难。
这是台湾最严重的空难。
经过仔细调查，科学家们发现了坠机的全部经过。
大约20年前，这架飞机遭遇重着陆，机身蒙皮受损。
航空公司没有按照维护指南更换整个蒙皮，而是只用一块铝板覆盖了该区域并进行了喷漆。
这导致该区域的金属疲劳。
在接下来的22年里，维修人员没有注意到任何异常。
`,
  },
  {
    index: 21,
    content: `Jiuzhai Huanglong Airport, also known as Jiuzhaigou Airport, is an airport in Songpan County, Sichuan province. 
It is one of the highest airport in the world with an altitude of 3448 meters. 
There are breathtaking mountain ranges on both sides of the axis of the runway, and the highest Xuebao peak is the main peak of Minshan Mountain, more than 18000 feet above the sea level. 
The terrain is complex and wind changes rapidly near the airport. 
So it is considered one of the most difficult airports to fly to in China. 
But those who fly over here are also amazed by the beautiful scenery. 
Due to the high elevation, some passengers may experience symptoms of altitude sickness.`,
    translation: `九寨黄龙机场，又被称为九寨沟机场，是四川省松潘县的一个机场。
它是世界上海拔最高的机场之一，海拔3448米。
跑道轴线两侧有令人惊叹的山脉，最高的雪豹峰是岷山的主峰，海拔超过18000英尺。
机场附近地形复杂，风的变化迅速，所以它被认为是中国最难飞到的机场之一，但那些飞到这里的人也会被美丽的风景惊艳到。
由于海拔高，一些乘客可能会出现高原反应的症状。
`,
  },
  {
    index: 22,
    content: `A Pakistan flight reported the failure of the left hand engine. 
The crew shut the engine down and continued descending, some time later, they declared Mayday and shortly afterwards radio and radar contact was lost. 
The aircraft was unable to maintain heading and turned left before impact with the ground. 
And all occupants of the aircraft perished in the crash. 
The investigation into the crash showed that the accident was caused by technical factors and was not caused by human error. 
The flight crew faced an very complex technical error, that had never occurred before. 
Due to maintenance irregularities, a turbine blade fractured causing further damage, that made it impossible to control the aircraft.`,
    translation: `一架巴基斯坦的航班报告了左发故障。
机组人员关闭左发继续下降，一段时间后，他们宣布了遇险，不久之后无线电和雷达失去了联系。
飞机无法保持航向，左转后撞向地面。
飞机上的所有乘客都在坠机中丧生。
对事故的调查表明，事故是由技术因素造成的，而不是人为错误造成的。
机组人员遇到了一个非常复杂的技术错误，这是以前从未发生过的。
由于维修不规范，涡轮叶片断裂造成进一步损坏，使飞机无法控制。
`,
  },
  {
    index: 23,
    content: `A Boeing 747 was on final approach to runway 26. 
After the aircraft went around from very low height, it did not climb out to safety altitude and impacted terrain about 1100 meters past the runway. 
The cause of the accident was the missing control of the crew over the aircraft position in relation to the glide slope during the automatic approach. 
The flight was conducted at night in the weather conditions, which is suitable for ICAO CAT II landing. 
And as a result, the go-around was not taken in due time and the aircraft had a significant deviation from the established approach chart, which led to the controlled flight into terrain.`,
    translation: `一架波音747飞机五边进近26号跑道。
在飞机从非常低的高度复飞后，它没有爬升到安全高度，并在距跑道1100米左右的地方撞地。
事故的原因是在自动进近过程中，机组人员对飞机与下滑道有关的位置失去了控制。
此次飞行是在夜间进行的，天气条件适合国际民航组织II类盲降。
结果导致复飞未及时进行，飞机与既定进近图有较大偏差，导致可控飞行撞地。
`,
  },
  {
    index: 24,
    content: `A Cargo Boeing 747 with 7 crew and cargo of military vehicles, has crashed shortly after takeoff. 
Afghan Authorities immediately denied claims that the crash was the result of enemy activities. 
Several observers on the ground reported the aircraft had just lifted off and was climbing through approximately 1200 feet when it's nose sharply rose. 
The aircraft appeared to have stalled and came down. 
According to a listener on frequency, the crew reported the aircraft stalled due to a possible load shift. 
The NTSB determined that the probable cause of this accident was inadequate procedures for restraining special cargo loads. 
The cargo moved after and damaged hydraulic systems and horizontal stabilizer components.`,
    translation: `一架载有7名机组人员和军用车辆的波音747货运飞机在起飞后不久坠毁。
阿富汗当局立即否认了飞机坠毁是敌人活动造成的说法。
地面上的几名观察员报告说，飞机刚刚起飞，正在爬升大约1200英尺时，机头急剧上扬。
飞机似乎失速并坠落了。
根据频率上的一一名听众，机组人员报告说飞机由于可能的负载转移而失速。
美国国家运输安全委员会认定，事故的可能原因是限制特殊货物装载的程序不充分。
货物移动后损坏了液压系统和平尾部件。
`,
  },
  {
    index: 25,
    content: `Flight 60 encountered moderate turbulence at 9000 feet during descending to Dallas. 
According to NTSB, as the flight began its descent, the captain illuminated the seat belt sign and made a public address reminding passengers to buckle up. 
Then the airplane entered a band of small cumulus clouds and experienced 10-15 seconds of moderate turbulence. 
The flight attendants were conducting their final cabin safety checks then, so 7 flight attendants received minor injuries, one passenger, who ignored the seat-belt sign and instructions, injured his left ankle. 
The aircraft continued for a landing on Dallas without further incident. 
The flight crew requested paramedics to meet the airplane at the gate. 
Finally, the passenger was transported to the hospital.`,
    translation: `60次航班在下降到达拉斯时在9000英尺处遇到中度颠簸。
据NTSB称，当飞机开始下降时，机长点亮了安全带指示灯，并做了机长广播，提醒乘客系好安全带。
随后，飞机进入了一个小积云带，经历了10-15秒的中度颠簸。
当时空乘人员正在进行最后的客舱安全检查，因此7名空乘人员受轻伤，一名乘客因无视安全带指示灯和提示而左脚踝受伤。
飞机继续在达拉斯降落，没有再发生事故。
机组人员请求医护人员在登机口与飞机会合。
最后，乘客被送往医院。
`,
  },
  {
    index: 26,
    content: `A flight with 98 passengers, encountered smoke in cockpit shortly after departure. 
The aircraft was cleared to FL340 and was about to contact Area Control when the smell of smoke was detected by the cockpit crew. 
After some discussion, they decided to return to Departure airport. 
The crew declared an emergency, then the captain elected to hand over pilot flying duties to the first officer in order to give his attention to the overall management of the situation. 
Both pilots put on their oxygen masks, and begun the descent and preparations to evacuate the aircraft on the runway. 
Finally the aircraft landed safely. 
6 injured passengers received medical assistance after landing.`,
    translation: `一架载有98名乘客的航班在起飞后不久，驾驶舱出现烟雾。
这架飞机被允许飞往高度层340，正要与区域管制中心联系时，驾驶舱机组人员闻到了烟味。
经过一番讨论，他们决定返回出发机场。
机组人员宣布了紧急情况，然后机长选择将飞行员的飞行职责交给副驾驶，以便让他关注局势的整体管理。
两名飞行员都戴上了氧气面罩，开始下降，准备在跑道上撤离。
最后飞机安全着陆了。
6名受伤乘客在着陆后接受了医疗救助。
`,
  },
  {
    index: 27,
    content: `An Airbus with 146 passengers and 5 crew, encountered turbulence during climbing from FL320 to FL340, causing injuries to 24 passengers and 3 cabin crew. 
The aircraft diverted for a safe landing on runway 32 about 25 minutes after stopping the climb at FL334. 
The 27 injured were taken to a hospital. 
Passengers reported those not belted into their seats were lifted against the ceiling and then slammed down again. 
A number of cabin ceiling panels received cracks. 
A replacement A320 was dispatched and reached the final destination with a delay of 7.5 hours. 
According to NTSB, probable cause of the occurrence was an inadvertent encounter with convective turbulence while in cruise flight.`,
    translation: `一架载有146名乘客和5名机组人员的空客飞机在从高度层320上升到高度层340时遇到颠簸，造成24名乘客和3名机组人员受伤。
飞机在高度层334停止爬升后大约25分钟转向32号跑道安全降落。
27名伤者被送往医院。
乘客报告说，那些没有系上安全带的人被甩到天花板上，然后又砰地一声摔了下来。
一些机舱天花板出现裂缝。
一架A320被派遣，在延误了7.5小时到达最终目的地。
据美国国家运输安全委员会称，事故发生的可能原因是在巡航飞行中意外遇到颠簸。
`,
  },
  {
    index: 28,
    content: `Flight 08 was cleared to climb to and maintain FL220. 
At the same time, another flight 29 was enroute at FL240. 
ATC instructed flight 08 to turn left heading 270. 
The crew however, read back "Climb FL270", which was not picked up by ATC. 
The crew selected FL270 into their Selected Altitude. 
The aircraft began to climb. 
Later, the radar issued an alert between these two aircraft. 
Then ATC instructed flight 08 to descend back to FL220 immediately. 
The aircraft already climbed through FL236. 
The separation reduced to 0 feet vertically and 2.6nm horizontally and the aircraft continued to climb reaching FL250, and re-establishing vertical separation. 
ATC thus instructed 08 to continue the climb to FL260.`,
    translation: `08航班被许可爬升并保持高度层220。
与此同时，另一架29号航班在高度层240巡航。
空中交通管制中心指示08航班左转航向270。
然而，机组人员复诵成“上高度层270”，空管也没有注意到。
机组人员将FL270选择到他们的“选择高度”。
飞机开始爬升。
后来，雷达在这两架飞机之间发出了警报。
然后ATC指示08航班立即下降到高度220，飞机已经爬升到高度236。
垂直距离降至0英尺，水平距离降至2.6海里，飞机继续爬升至高度层250，并重新建立垂直间隔。
空管因此指示08航班继续爬升到高度层260。
`,
  },
  {
    index: 29,
    content: `A flight was on NDB approach to runway 28 in instrument meteorological conditions. 
The aircraft descended below minimum safe altitude when it was handed off to tower. 
The approach controller received a Minimum Safe Altitude Warning and the aircraft's EGPWS issued a warning, too. 
The crew initiated a go-around and the aircraft climbed to safe altitude. 
Then the crew positioned for another approach and landed safely on runway 28 after aborting the first approach. 
According to the investigation, the incident occurred while the aircraft performed an NDB approach without DME, probably without external visual references. 
Meanwhile, the first preparation of the approach was probably incomplete or imprecise.`,
    translation: `在仪表气象条件下，一架飞机在NDB进近28号跑道。
当飞机被移交给塔台时，它下降到最低安全高度以下。
进场管制员收到了最低安全高度警告，飞机的EGPWS也发出了警告。
机组人员启动复飞，飞机爬升到安全高度。
然后机组人员准备再次进近，在第一次复飞后安全降落在28号跑道上。
根据调查，事故发生时，飞机在没有DME的情况下进行了NDB进近，可能没有外部视觉参考。
同时，该进近的最初准备工作可能不完整或不精确。
`,
  },
  {
    index: 30,
    content: `An A320 with 114 passengers and 6 crew, departed from the runway. 
At that time, the left engine dropped two bonnets. 
In the absence of any abnormal indications and unaware of the separation, the crew continued the flight for a safe landing. 
Although a part of the engine cowling became stuck in the left main gear, the gear retracted normally after takeoff and extended without problems. 
The aircraft received minor damage at the left main gear and the left side of the fuselage, however all persons on board disembarked normally, no medical attention was needed. 
The investigation has determined that the incident was caused by flying the airplane without closing and properly latching the cowls on the airplane’s left engine.`,
    translation: `一架载有114名乘客和6名机组人员的A320飞机从跑道起飞。
当时，左发动机掉了两个发动机盖。
机组没有注意到任何异常指示，也不知道发生了发动机罩脱落，继续飞行安全着陆。
虽然发动机整流罩的一部分卡在左主起落架上，但起飞后起落架收放正常，释出无问题。
飞机的左主起落架和机身左侧受到轻微损坏，但机上所有人员正常下机，没有人需要医疗救助。
调查确定，该事件是由于起飞时没有关闭并正确闩上飞机左发的整流罩。
`,
  },
  {
    index: 31,
    content: `QFA67 had safely landed on runway 03, vacated the runway via taxiway but taxied past the holding point of runway 06 and crossed an illuminated stop bar without ATC clearance. 
Another QFA82 was accelerating for takeoff from runway 06 when QFA67 crossed the hold short line. 
QFA67 became aware of their position and stopped their aircraft just before crossing the edge of runway 06. 
Then QFA82 rejected takeoff and came to a stop. 
The aircraft vacated the runway and returned to the apron. 
QFA82's wingtip passing about 15 meters from QFA67's nose at low speed. 
The ATSB report that bad taxiway design, flight crew distraction and incorrect mental model is responsible for this runway incursion.`,
    translation: `QFA67安全降落在03号跑道，并通过滑行道离开跑道，但在没有获得空管许可的情况下滑过06号跑道的等待点，并越过有灯的停机线。
另一架QFA82在从06跑道加速起飞，当时QFA67越过等待线。
QFA67意识到他们的位置，在穿过06号跑道边缘之前停了下来。
然后QFA82中断起飞并停了下来。
飞机离开跑道，回到停机坪。
QF582的翼尖低速从QF567机头约15米处经过。
澳大利亚运输安全局报告称，滑行道设计糟糕、机组人员注意力分散和错误的思维模式是造成这次跑道入侵的原因。
`,
  },
  {
    index: 32,
    content: `A B747 performing freight with 2 crew, was on a GPS/RNAV approach to A Airport runway 19L, but unintentionally landed on runway 18 of B Airport. 
The crew requested to vacate via taxiway D, the puzzled tower responded "stand by", then informed the crew that they were about 8nm from the original airport. 
The crew believed they had landed on A Airport, the even more puzzled tower replied "confirm you landed at A Airport?". 
Because the tower of A airport was closed at that time, the crew contacted A airport by UNICOM frequency. 
After which, the crew realized that they have landed on the wrong airport. 
In the meantime a ground person arrived at the aircraft and told the crew the local frequency.`,
    translation: `一架载有2名机组人员的B747飞机，GPS/RNAV进近下降着陆A机场的19L跑道，但无意中降落在B机场的18跑道上。
机组人员请求从D滑行道脱离，塔台困惑地回答“稍等”，然后通知机组人员他们距离原机场约8海里。
机组人员认为他们已经降落在A机场，塔台更困惑的回答：“证实你降落在A机场？”由于当时A机场塔台关闭，机组人员通过UNICOM频率联系A机场。
之后，机组人员意识到他们降落在了错误的机场。
与此同时，一名地勤人员来到飞机上，告知了机组人员本场的频率。
`,
  },
  {
    index: 33,
    content: `An ERJ was cleared self-positioning for an ILS approach. 
At the same time, an ultralight aircraft was operating VFR flight below the controlled airspace. 
The two aircraft were on different radio frequencies. 
While positioning to intercept the localizer, the ERJ automatically turned west and began to descend. 
Then the crew changed from automatic glideslope coupling to vertical speed and increased the rate of descent to re-capture the glideslope. 
Later, the crew queried about the target on their TCAS and the altitude of the ultralight aircraft. 
When their distance reduced to 1 nautical mile horizontally and 200 feet vertically, the ERJ's TCAS issued a resolution advisory, and the crew initiated a go around. 
The aircraft made another approach and landed safely.`,
    translation: `一架ERJ被许可进行盲降进近。
与此同时，另一架超轻型飞机在管制空域下方进行VFR飞行。
两架飞机使用不同的无线电频率。
当飞机仍在修正位置，拦截航向道时，ERJ自动向西转向并开始下降。
然后机组人员从自动下滑道切换到垂直速度，并增加下降速度以重新截获航向道。
后来，机组人员询问了TCAS上的目标和超轻型飞机的高度。
在水平距离减少到1海里，垂直距离减少到200英尺时，ERJ的TCAS发出了决策咨询，机组执行了复飞。
飞机再次降落并安全着陆。
`,
  },
  {
    index: 34,
    content: `An A319 with 148 passengers and 6 crew, was descending when the first officer, pilot flying, became unfit to fly, relinquished control to the captain and left the cockpit. 
The captain declared PANPAN and continued for a safe landing. 
The probable cause of the incident was that the co-pilot experienced anxiety which developed into an anxiety attack during the approach. 
The captain, ATC and cabin crew worked together effectively to achieve a safe single pilot landing and to get medical help for the co-pilot. 
If the co-pilot reported that he is unfit for duty, and if there were more effective communication between the co-pilot and the captain, the opportunity for the incident might had been reduced.`,
    translation: `一架载有148名乘客和6名机组人员的A319飞机在下降时，驾驶飞机的副驾驶感到不适合飞行，将控制权交给机长并离开了驾驶舱。
机长做了紧急呼叫，继续安全着陆。
事故的原因可能是副驾驶在进近格拉斯哥的过程中感到紧张，并发展为焦虑。
机长、空管和机组人员有效合作，实现了单人驾驶飞机的安全着陆，并为副驾驶获得了医疗帮助。
如果副驾驶报告说他不适合执勤，或者副驾驶和机长之间有更有效的沟通，发生事故的机会可能会减少。
`,
  },
  {
    index: 35,
    content: `An AirAsia Airbus 330-300, with 359 people on board, was enroute at FL380 about 200 nautical mile southwest of Perth. 
Then the left hand engine suffered a blade fracture. 
the engine ingested the blade and caused severe damage in engine core and severe vibrations. 
The crew shut the engine down, and drifted the aircraft down to FL200, and returned to Perth for a safe landing about 2 hours after the engine failure.
 Passengers reported they heard a large bang, followed by severe vibrations, and sounds like a spinning washing machine. 
They were instructed to brace for landing.
 Australia's emergency services reported, they put their marine emergency services on standby for a possible water landing.
 The airline reported the aircraft returned to Perth due to a technical problem, but they didn’t confirm it is an engine issue. 
Emergency services were called as precaution only as part of the standard operating procedures. 
The passengers then rebooked onto other flights.`,
    translation: `一架载有359人的亚航(AirAsia)空客330-300客机，当时正在珀斯西南约200海里的高度层380飞行。
随即左发风扇叶片断裂。
发动机吸入叶片，造成发动机核心部件严重损伤，发动机振动严重。
机组人员关闭发动机，将飞机降至高度层200，在发动机故障约2小时后返回珀斯安全着陆。
乘客们报告说，他们听到了一声巨响，接着是剧烈的震动，听起来像洗衣机在旋转。
他们被要求做好着陆防撞准备。
澳大利亚应急服务部门报告称，他们已通知海上应急服务处于待命状态，以应对潜在的水上迫降。
该航空公司报告称，飞机返航珀斯是由于技术问题，但他们没有证实是发动机问题。
请求紧急服务只是作为预防措施的一部分，作为标准操作程序的一个环节。
随后，这些乘客重新预订了其他航班。
`,
  },
  {
    index: 36,
    content: `An Eastar Jet B737 performing flight from Korea to Japan, was cleared for the approach to runway 03L. 
however, the aircraft was aligned with runway 03R. 
but the runway 03R was occupied by a vehicle. 
The aircraft went around from very low height. 
Then it positioned for another approach to runway 03L. 
Finally, the aircraft landed safely on runway 03L about 9 minutes after the go around. 
JTSB reported that the aircraft didn’t land on the right runway as instructed by ATC. 
In this serious incident, it is highly probable that because the captain of the aircraft misidentified the runway. 
he made an approach for the different runway where an inspection vehicle was running on.`,
    translation: `一架Eastar Jet B737从韩国飞往日本，允许进近03L跑道。
然而，飞机与跑道03R对齐。
但是03R跑道被一辆车占用了。
飞机从很低的高度盘旋。
然后它定位到另一个进近跑道03L。
最后，飞机在复飞约9分钟后安全降落在03L跑道上。
JTSB报告说，飞机没有按照空中交通管制的指示降落在正确的跑道上。
在这次严重的事故中，很有可能是因为机长错认了跑道。
他向另一条跑道靠近，一辆检查车正在跑道上行驶。
`,
  },
  {
    index: 37,
    content: `An Air France aircraft performs flight from London to Paris with 136 people on board. 
When the aircraft was climbing through FL230, the crew donned their oxygen masks, declared Mayday and requested an immediate return to London. 
The crew advised they suspected a fire on board, and then, they reported they had smoke and fumes in the cockpit. 
The aircraft landed safely back on runway 13R about 23 minutes after departure. 
The crew advised they were able to vacate the runway. 
Finally, the aircraft taxied to the apron. 
The aircraft was able to depart about 4 hours after landing, and reached Paris with a delay of 4.5 hours. 
Maintenance identified a faulty display as source of the fumes and smoke.`,
    translation: `一架法航飞机从伦敦飞往巴黎，机上有136人。
当飞机爬升到高度层230时，机组人员戴上氧气面罩，宣布遇险，请求立即返回伦敦。
机组人员说他们怀疑飞机上着火了，然后他们报告说驾驶舱里有烟雾。
飞机在起飞约23分钟后安全降落在13R跑道上。
机组人员通知他们可以脱离跑道。
最后，飞机滑行到停机坪上。
这架飞机在降落后约4小时起飞，在延误4.5小时后抵达巴黎。
维修人员发现一个有故障的显示器是烟雾的来源。
`,
  },
  {
    index: 38,
    content: `A flight from Philippines to Singapore with 129 people on board, was descending towards Singapore when the flight crew donned their oxygen masks. 
declared PAN PAN, reporting excessive cabin altitude and initiated an emergency descent to 9000 feet. 
The aircraft continued to Singapore for a safe landing on runway 20C. 
The likely cause of the excessive cabin altitude was a corruption of LFE that is landing field elevation, in the CPC. 
The CPC manufacturer believed that the corruption arose from a fatigue solder joint on the CPC circuit board. 
There had been past occurrences of excessive cabin altitude, of which one was determined to have been caused by a fatigue solder joint, similar to this occurrence.`,
    translation: `一架载有129人的航班从菲律宾飞往新加坡，正准备降落新加坡时，机组报告客舱高度过高，并戴上了氧气面罩。
机组宣布“PAN PAN”，并将飞机紧急下降到9000英尺。
这架飞机继续飞往新加坡，并在20中跑道安全着陆。
导致座舱高度过高的原因是可能CPC中的着陆机场标高损坏。
CPC制造商认为，损坏是由CPC电路板上的焊点疲劳引起的。
过去也曾发生过座舱高度过高的情况，其中有一次被确定与疲劳焊点有关，与这次发生的情况类似。
`,
  },
  {
    index: 39,
    content: `A British aircraft pushed back using a towbarless tractor at London Heathrow Airport. 
But that unit was disconnected from the aircraft. 
After receiving taxi clearance from ATC, the aircraft started moving under its own power and, shortly afterwards, collided with the tractor that had just performed the pushback. 
Both the right engine of the aircraft and the tractor were damaged. 
The investigation report stated, that the primary causal factor was the headset operator giving the “all clear” signal to the flight crew, before the tractor had been repositioned to a safe distance. 
Contributory factors were the co-pilot failing to see the tractor and the tractor not driving away after the aircraft began to taxi.`,
    translation: `英国航空公司的一架飞机在伦敦希思罗机场使用无拖杆牵引车推出。
但拖车与飞机并没有连接。
在得到空管制中心的滑行许可后，飞机开始自行滑出，不久之后，与刚刚完成推出的拖车相撞。
飞机的右发和拖车受损。
调查报告称，事故的主要原因是，在拖车被重新回到与飞机能保持安全距离之前，机务就向机组人员发出“冲突解除”的信号。
导致事故的原因还包括副驾没有看到拖车。
以及在飞机开始滑行后，拖车没有开走。
`,
  },
  {
    index: 40,
    content: `An ERJ190 from Durango to Mexico rejected takeoff from Durango's runway 03 because of adverse weather. 
The aircraft overran the end of the runway and burst into flames and was destroyed, there were no fatalities, 2 people received serious injuries and 83 people received minor injuries. 
Some people with injuries were taken to a local hospital. 
The airline stated there were 99 passengers on board. 
The aircraft had operated since 2014. 
The local governor reported the aircraft was about to take off when it suffered an accident. 
According to flight data recorder as well as cockpit voice recorder, the pilots did a good job to bring the plane down, which prevented things from worse to catastrophe.`,
    translation: `一架从杜兰戈飞往墨西哥的ERJ190由于恶劣天气从杜兰戈03号跑道中断起飞。
飞机冲出跑道，起火烧毁，没有人员死亡，2人受重伤，83人受轻伤。
一些受伤的人被送往当地医院。
航空公司称机上有99名乘客。
这架飞机自2014年以来一直在运营。
当地州长报告说，飞机在即将起飞时发生了事故。
从飞行数据记录仪和驾驶舱语音记录仪来看，飞行员已经尽全力将飞机停下，避免了事故变成灾难。
`,
  },
  {
    index: 41,
    content: `A flight from New York to Paris was enroute at FL380 when the crew decided to divert, reporting with left hand engine failure. 
The crew requested to descend to FL320. 
The diversion was approved, however, the request to descent took more than 15 minutes due to traffic. 
The aircraft continued to maintain FL380 in the meantime. 
Finally, the aircraft descended to FL290 and landed safely about 2 hours later. 
Another aircraft was sent to fly the 96 passengers and cargo to Paris. 
According to the investigation, the crew attempted to move the thrust lever back and forth when the engine started to vibrate, but this resulted in the engine stalling. 
The crew thus declared emergency and diverted.`,
    translation: `一架从纽约飞往巴黎的航班在FL380飞行途中，机组人员决定备降，报告左发故障。
机组要求下降到高度层320。
备降被批准，然而，由于其他航空器，请求下降花了15多分钟。
在此期间，飞机继续保持高度层380。
最后，飞机下降到高度层290，并在大约2小时后安全着陆。
另一架飞机将96名乘客和货物送往巴黎。
根据调查，当发动机开始振动时，机组人员试图前后移动推力杆，但这导致了发动机失速。
机组人员因此宣布紧急情况并备降。
`,
  },
  {
    index: 42,
    content: `A visual approach is an ATC authorization for aircraft on IFR flight plan to proceed visually to the airport, even to the landing. 
It is not an instrument approach procedure, and there is no missed approach segment. 
Even when an aircraft is being vectored for an instrument approach, controllers may initiate or pilots may request a visual approach if the pilot reports the airport or runway in sight. 
Before clearing an aircraft for a visual approach, controllers should ensure that weather conditions at the airport are VFR, and they need to resolve potential conflicts with all other aircraft. 
The pilot must have either the airport or the preceding aircraft in sight. 
This approach must be authorized and under ATC facility.`,
    translation: `目视进近是管制员对原本执行仪表飞行的飞机，计划进行目视进近，甚至到着陆的授权。
它不是仪表进近程序，没有复飞环节。
即使航空器处于仪表进近，只要飞行员随后报告能够目视机场或跑道，管制员就可以发布或者飞行员就可以请求目视进近。
在允许一架飞机进行目视进近之前，管制员应确保机场的天气符合目视飞行条件，并解决与所有其他飞机的潜在冲突。
飞行员必须在任何时候都能看见机场或前机。
目视进近的批准和实施，需要借助空中交通管制设施。
`,
  },
  {
    index: 43,
    content: `A British Airways aircraft was from London to Paris. 
20 minutes into the flight, a passenger reported an "acrid burning smell" from seat 12A, fearing the plane was on fire, and alerted crew members. 
The crew conducted an immediate inspection of the seating area, but did not find any source of the burning smell. 
Shortly after, the smoke in the cabin was getting thicker and some passengers were having difficulty breathing. 
The captain had sent the "Pan-Pan" emergency signal to the control center, requesting an immediate diversion to the nearby airport! However, the smoke turned worse, the plane lost control and crashed 15 nm away from the alternate airport.`,
    translation: ``,
  },
  {
    index: 44,
    content: `A B767 suffered tail strike during takeoff. 
During the takeoff roll, the V1 call was delayed by about 10-15 knots by the captain, as he thought the aircraft might be heavier than calculated. 
During the rotation the TAILSKID message illuminated, indicating that the aircraft had suffered a tail strike. 
The captain applied full power and shortly afterwards the stick shaker activated briefly. 
The aircraft continued to climb away. 
According to the investigation, the zero fuel weight had been incorrectly entered into the operator's Computer Take Off Programme instead of the takeoff weight. 
This generated significantly slower takeoff speeds than required for the actual weight of the aircraft.`,
    translation: `一架B767在起飞时遭遇擦尾。
在起飞过程中，V1呼叫被机长延迟了大约10-15节，因为他认为飞机可能比计算的要重。
在滑跑过程中，出现TAILSKID信息，表明飞机擦尾。
机长使用最大推力，不久，驾驶杆抖振器短暂地启动了。
飞机继续爬升。
根据调查，零燃油重量错误地输入了电脑起飞程序，而不是起飞重量。
这导致起飞速度明显低于飞机实际重量所需的起飞速度。
`,
  },
  {
    index: 45,
    content: `With frequent terrorist attacks, the threat level is growing rapidly, causing deep concerns among passengers about the safety of air travel. 
In order to ensure flight safety, airports have no choice but to increase the number of security checks, but this also leads to frequent delays in passengers' travel. 
In response to the new risk of low-altitude aircraft being targeted by terrorist attacks, some have proposed installing anti-missile systems on landing gear. 
However, others said that although this is technically feasible, the installation of the equipment and maintenance require huge capital investment, which is a large expense for civil aviation airlines. 
Moreover, the installation of the system on the landing gear of civil aircraft may negatively affect the flight performance and safety of the aircraft.`,
    translation: `恐怖袭击事件频发，其威胁程度日益升级，引发了广大旅客对航空安全的深切担忧。
为确保飞行安全，机场方面不得不增设多重安检环节，但这同时也导致了旅客行程的频繁延误。
面对低高度航空器可能遭受恐怖袭击的新风险，有人提出了在起落架上安装反导弹系统的解决方案。
但不少人表示，这一举措虽然在技术上具有可行性，但是该设备的安装以及维护都需要巨大的资金投入，对于民航公司来说，这是一笔巨大的开支，再者，在民航飞机起落架上安装该系统可能会对飞机的飞行性能和安全性产生负面影响。
`,
  },
];

export default stories;
