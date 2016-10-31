var shuffleSequence = seq("consent", "setcounter", "background", "intro", "Practice", "presep", "dummysep",
                        sepWith("sep", rshuffle(startsWith("cond"))), "exit");
//var practiceItemTypes = ["Practice"];
//var progressBarText = ["Progress"];
var ds = DashedSentence;

var showProgressBar = false;

var defaults = [
    Separator,{
        ignoreFailure: false, 
        errorMessage: "Wrong answer. Please read each sentence carefully!"
    },
    ds,{
        mode: "self-paced reading",
        display: "in place"
    },
      "AcceptabilityJudgment", { 
    q: '',
    as: ["1", "2", "3", "4", "5"],
    presentAsScale: true,
    leftComment: "(Implausible)", rightComment: "(Plausible)"}
];

 // insert breaks
function modifyRunningOrder(ro) {

 for (var i = 0; i < ro.length; ++i) {
 if (i % 24 == 22 && i > 25 && i < 200) {
 ro[i].push(new DynamicElement(
 "Message",
 { html: "<p>Please take a short break. The experiment will continue in 10 seconds.</p>", transfer: 10000 },
 true
 ));
 }
 }
 return ro;
 }


var items = [

["consent", "Form", {consentRequired: true, html: {include: "consent-2016.html" }} ], 
["setcounter", "__SetCounter__", { }],   
["background", "Form", {consentRequired: true, html: {include: "background.html" }} ],
["intro", "Form", {consentRequired: true, html: {include: "intro1.html" }} ],
["intro", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
["exit", "Form", {consentRequired: false, html: {include: "exit.html" }} ],
["debrief", "Form", {consentRequired: false, html: {include: "debrief.html" }} ],

["sep", Separator, { }],

["Practice", AcceptabilityJudgment, {s: "This is just a practice sentence to get you used to the method of presentation."}],

["Practice", AcceptabilityJudgment, {s: "This is another practice sentence which is longer and a little more complicated than the one you just read."}],
                         
["Practice", Message, {consentRequired: false, transfer: "keypress",
                     html: ["div",
                           ["p", "That's all there is to it! When you're ready to begin the experiment, press any button to move ahead. REMEMBER: it will last approximately 15 minutes, and will require your full attention throughout that period. Thank you for your help!"]
                           ]}],
                           
["presep", Separator, { transfer: 3000, normalMessage: "Get your hands in position, and get ready to begin!" }],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],

[["cond-A",1], AcceptabilityJudgment, {s: "The announcement to ban the book apparently was met with significant criticism from the press."}],
[["cond-B",1], AcceptabilityJudgment, {s: "The announcement that banned the book apparently was met with significant criticism from the press."}],

[["cond-A",2], AcceptabilityJudgment, {s: "The plan to alter the layout supposedly was approved by the architect at the respected firm."}],
[["cond-B",2], AcceptabilityJudgment, {s: "The plan that altered the layout supposedly was approved by the architect at the respected firm."}],

[["cond-A",3], AcceptabilityJudgment, {s: "The plot to disrupt the meeting reportedly was devised by the younger staff members who wanted more benefits."}],
[["cond-B",3], AcceptabilityJudgment, {s: "The plot that disrupted the meeting reportedly was devised by the younger staff members who wanted more benefits."}],

[["cond-A",4], AcceptabilityJudgment, {s: "The legislation to outlaw the chemical apparently was sponsored by the senator with friends in the EPA."}],
[["cond-B",4], AcceptabilityJudgment, {s: "The legislation that that outlawed the chemical apparently was sponsored by the senator with friends in the EPA."}],

[["cond-A",5], AcceptabilityJudgment, {s: "The plan to save the forest supposedly was effective at preventing an outbreak of Dutch Elm Disease."}],
[["cond-B",5], AcceptabilityJudgment, {s: "The plan that saved the forest supposedly was effective at preventing an outbreak of Dutch Elm Disease."}],

[["cond-A",6], AcceptabilityJudgment, {s: "The proposal to upgrade the factory apparently is grounded in the effort to curb manufacturing costs."}],
[["cond-B",6], AcceptabilityJudgment, {s: "The proposal that upgraded the factory apparently is grounded in the effort to curb manufacturing costs."}],

[["cond-A",7], AcceptabilityJudgment, {s: "The referendum to legalize the drug apparently was supported by the liberal voters in the state."}],
[["cond-B",7], AcceptabilityJudgment, {s: "The referendum that legalized the drug apparently was supported by the liberal voters in the state."}],

[["cond-A",8], AcceptabilityJudgment, {s: "The military operation to end the war supposedly was launched in the night to try to take the enemy by surprise."}],
[["cond-B",8], AcceptabilityJudgment, {s: "The military operation that ended the war supposedly was launched in the night to try to take the enemy by surprise."}],

[["cond-A",9], AcceptabilityJudgment, {s: "The scheme to persuade the executive apparently was created by the salesmen during the company's weekly meeting."}],
[["cond-B",9], AcceptabilityJudgment, {s: "The scheme that persuaded the executive apparently was created by the salesmen during the company's weekly meeting."}],

[["cond-A",10], AcceptabilityJudgment, {s: "The program to prevent the outbreak reportedly was effective at lowering rates of the flu at elementary schools."}],
[["cond-B",10], AcceptabilityJudgment, {s: "The program that prevented the outbreak reportedly was effective at lowering rates of the flu at elementary schools."}],

[["cond-A",11], AcceptabilityJudgment, {s: "The bill to fund the park apparently was stalled by the senator who wanted the city to pay for the project."}],
[["cond-B",11], AcceptabilityJudgment, {s: "The bill that funded the park apparently was stalled by the senator who wanted the city to pay for the project."}],

[["cond-A",12], AcceptabilityJudgment, {s: "The plan to close the hospital evidently was expedited after the new care center opened down the street."}],
[["cond-B",12], AcceptabilityJudgment, {s: "The plan that closed the hospital evidently was expedited after the new care center opened down the street."}],

[["cond-A",13], AcceptabilityJudgment, {s: "The fundraiser to finance the clinic supposedly was considered a huge success by the nurses."}],
[["cond-B",13], AcceptabilityJudgment, {s: "The fundraiser that financed the clinic supposedly was considered a huge success by the nurses."}],

[["cond-A",14], AcceptabilityJudgment, {s: "The deal to end the strike reportedly was negotiated by the union on behalf of the middle school teachers."}],
[["cond-B",14], AcceptabilityJudgment, {s: "The deal that ended the strike reportedly was negotiated by the union on behalf of the middle school teachers."}],

[["cond-A",15], AcceptabilityJudgment, {s: "The procedure to cure the disease apparently was tested with computer models in the university labs."}],
[["cond-B",15], AcceptabilityJudgment, {s: "The procedure that cured the disease apparently was tested with computer models in the university labs."}],

[["cond-A",16], AcceptabilityJudgment, {s: "The strategy to trick the client supposedly was uncovered by the regulator in charge of business ethics."}],
[["cond-B",16], AcceptabilityJudgment, {s: "The strategy that tricked the client supposedly was uncovered by the regulator in charge of business ethics."}],

[["cond-A",17], AcceptabilityJudgment, {s: "The billboard to publicize the law apparently was created by the government to increase awareness about drug use."}],
[["cond-B",17], AcceptabilityJudgment, {s: "The billboard that publicized the law apparently was created by the government to increase awareness about drug use."}],

[["cond-A",18], AcceptabilityJudgment, {s: "The plan to fool the customer apparently was stopped after the newspaper printed a negative profile of the company."}],
[["cond-B",18], AcceptabilityJudgment, {s: "The plan that fooled the customer apparently was stopped after the newspaper printed a negative profile of the company."}],

[["cond-A",19], AcceptabilityJudgment, {s: "The order to pardon the assassin supposedly was given by the judge and leaked to the press."}],
[["cond-B",19], AcceptabilityJudgment, {s: "The order that pardoned the assassin supposedly was given by the judge and leaked to the press."}],

[["cond-A",20], AcceptabilityJudgment, {s: "The announcement to stop the riot supposedly was broadcast on the radio and played over loudspeakers to the crowd."}],
[["cond-B",20], AcceptabilityJudgment, {s: "The announcement that stopped the riot supposedly was broadcast on the radio and played over loudspeakers to the crowd."}],

[["cond-A",21], AcceptabilityJudgment, {s: "The battle to remove the general reportedly was successful due to the air strikes that supported the ground forces."}],
[["cond-B",21], AcceptabilityJudgment, {s: "The battle that removed the general reportedly was successful due to the air strikes that supported the ground forces."}],

[["cond-A",22], AcceptabilityJudgment, {s: "The idea to improve the office apparently was celebrated among the staff and substantially increased their job satisfaction."}],
[["cond-B",22], AcceptabilityJudgment, {s: "The idea that improved the office apparently was celebrated among the staff and substantially increased their job satisfaction."}],

[["cond-A",23], AcceptabilityJudgment, {s: "The housing program to support the neighborhood apparently was created by the local government to decrease poverty."}],
[["cond-B",23], AcceptabilityJudgment, {s: "The housing program that supported the neighborhood apparently was created by the local government to decrease poverty."}],

[["cond-A",24], AcceptabilityJudgment, {s: "The proposal to scrap the fee probably was motivated by the petition from the students to stop raising tuition."}],
[["cond-B",24], AcceptabilityJudgment, {s: "The proposal that scrapped the fee probably was motivated by the petition from the students to stop raising tuition."}],

[["cond-A",25], AcceptabilityJudgment, {s: "The movement to support the wind farm reportedly was funded by the foundation that promotes environmental justice."}],
[["cond-B",25], AcceptabilityJudgment, {s: "The movement that supported the wind farm reportedly was funded by the foundation that promotes environmental justice."}],

[["cond-A",26], AcceptabilityJudgment, {s: "The order to ban the website apparently was supported by a coalition of concerned parents and teachers."}],
[["cond-B",26], AcceptabilityJudgment, {s: "The order that banned the website apparently was supported by a coalition of concerned parents and teachers."}],

[["cond-A",27], AcceptabilityJudgment, {s: "The poster to advertise the theater supposedly was designed by an actor who did graphic design on the side."}],
[["cond-B",27], AcceptabilityJudgment, {s: "The poster that advertised the theater supposedly was designed by an actor who did graphic design on the side."}],

[["cond-A",28], AcceptabilityJudgment, {s: "The fight to stop the deportation reportedly was regarded by the activist as a win for human rights awareness."}],
[["cond-B",28], AcceptabilityJudgment, {s: "The fight that stopped the deportation reportedly was regarded by the activist as a win for human rights awareness."}],

[["cond-A",29], AcceptabilityJudgment, {s: "The movement to destroy the corporation apparently was holding a huge demonstration outside of their headquarters."}],
[["cond-B",29], AcceptabilityJudgment, {s: "The movement that destroyed the corporation apparently was holding a huge demonstration outside of their headquarters."}],

[["cond-A",30], AcceptabilityJudgment, {s: "The request to release the document supposedly was submitted by the journalist researching government transparency."}],
[["cond-B",30], AcceptabilityJudgment, {s: "The request that released the document supposedly was submitted by the journalist researching government transparency."}],

[["cond-A",31], AcceptabilityJudgment, {s: "The battle to stop the dictator apparently was fought in the jungle on the border of Peru."}],
[["cond-B",31], AcceptabilityJudgment, {s: "The battle that stopped the dictator apparently was fought in the jungle on the border of Peru."}],

[["cond-A",32], AcceptabilityJudgment, {s: "The expedition to uncover the fossil apparently was organized by the professor from Brazil."}],
[["cond-B",32], AcceptabilityJudgment, {s: "The expedition that uncovered the fossil apparently was organized by the professor from Brazil."}],

[["cond-A",33], AcceptabilityJudgment, {s: "The decision to open the border supposedly was opposed by the agency in charge of national security."}],
[["cond-B",33], AcceptabilityJudgment, {s: "The decision that opened the border supposedly was opposed by the agency in charge of national security."}],

[["cond-A",34], AcceptabilityJudgment, {s: "The deal to create the shelter apparently was negotiated by the city council in an emergency meeting."}],
[["cond-B",34], AcceptabilityJudgment, {s: "The deal that created the shelter apparently was negotiated by the city council in an emergency meeting."}],

[["cond-A",35], AcceptabilityJudgment, {s: "The committee to improve the university reportedly was comprised of distinguished alumni and prominent professors."}],
[["cond-B",35], AcceptabilityJudgment, {s: "The committee that improved the university reportedly was comprised of distinguished alumni and prominent professors."}],

[["cond-A",36], AcceptabilityJudgment, {s: "The procedure to balance the budget apparently was tested by the accountants in preparation for the audit meeting."}],
[["cond-B",36], AcceptabilityJudgment, {s: "The procedure that balanced the budget apparently was tested by the accountants in preparation for the audit meeting."}],

[["cond-A",37], AcceptabilityJudgment, {s: "The plan to alter the assembly line supposedly was submitted by a worker who wanted improvements in safety."}],
[["cond-B",37], AcceptabilityJudgment, {s: "The plan that altered the assembly line supposedly was submitted by a worker who wanted improvements in safety."}],

[["cond-A",38], AcceptabilityJudgment, {s: "The treaty to stop the war reportedly was signed by the general after a huge naval defeat."}],
[["cond-B",38], AcceptabilityJudgment, {s: "The treaty that stopped the war reportedly was signed by the general after a huge naval defeat."}],

[["cond-A",39], AcceptabilityJudgment, {s: "The vote to remove the senator apparently was motivated by the rumor started by the lobbyists."}],
[["cond-B",39], AcceptabilityJudgment, {s: "The vote that removed the senator apparently was motivated by the rumor started by the lobbyists."}],

[["cond-A",40], AcceptabilityJudgment, {s: "The prayer to conclude the service frequently was given by the pastor who founded the church."}],
[["cond-B",40], AcceptabilityJudgment, {s: "The prayer that concluded the service frequently was given by the pastor who founded the church."}],

[["cond-A",41], AcceptabilityJudgment, {s: "The appeal to release the defendant apparently was submitted by the lawyer in the defense trial."}],
[["cond-B",41], AcceptabilityJudgment, {s: "The appeal that released the defendant apparently was submitted by the lawyer in the defense trial."}],

[["cond-A",42], AcceptabilityJudgment, {s: "The order to postpone the mission supposedly was given by the commander in the radio tower."}],
[["cond-B",42], AcceptabilityJudgment, {s: "The order that postponed the mission supposedly was given by the commander in the radio tower."}],

[["cond-A",43], AcceptabilityJudgment, {s: "The project to improve the house apparently was stalled after the storm caused flooding in the basement."}],
[["cond-B",43], AcceptabilityJudgment, {s: "The project that improved the house apparently was stalled after the storm caused flooding in the basement."}],

[["cond-A",44], AcceptabilityJudgment, {s: "The request to delay the trial reportedly was used by the District Attorney as evidence of obstruction of justice."}],
[["cond-B",44], AcceptabilityJudgment, {s: "The request that delayed the trial reportedly was used by the District Attorney as evidence of obstruction of justice."}],

[["cond-A",45], AcceptabilityJudgment, {s: "The flier to promote the restaurant apparently was approved by the manager and put in the window."}],
[["cond-B",45], AcceptabilityJudgment, {s: "The flier that promoted the restaurant apparently was approved by the manager and put in the window."}],

[["cond-A",46], AcceptabilityJudgment, {s: "The sneak attack to distract the tank supposedly was executed by the platoon that had recently returned from a break."}],
[["cond-B",46], AcceptabilityJudgment, {s: "The sneak attack that distracted the tank supposedly was executed by the platoon that had recently returned from a break."}],

[["cond-A",47], AcceptabilityJudgment, {s: "The plan to increase the tax apparently was celebrated by the organization fighting corporate greed."}],
[["cond-B",47], AcceptabilityJudgment, {s: "The plan that increased the tax apparently was celebrated by the organization fighting corporate greed."}],

[["cond-A",48], AcceptabilityJudgment, {s: "The decision to delay the project apparently was opposed by the developer who was eager to make money."}],
[["cond-B",48], AcceptabilityJudgment, {s: "The decision that delayed the project apparently was opposed by the developer who was eager to make money."}]

];