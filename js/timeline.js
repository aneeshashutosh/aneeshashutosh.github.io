// Pre-populate these fields to decrease execution time.
var years = [2017, 2016, 2015, 2014, 2013, 2012, 2011];

// Make sure that these are in order, again, to decrease execution time.
var all_items = [{
    title: "Namely",
    subtitle: "Software Engineering Intern",
    date: "May 22 – August 11",
    year: 2017,
    type: "job",
    description: "The first software engineering intern at Namely, ever. Working to optimize and speed up front-end performance."
}, {
    title: "NYU President's Service Award",
    date: "April 14",
    year: 2017,
    type: "award",
    description: "Received two President's Service Awards; one for my work as a member at the NYU Entrepreneurship & Innovation Association, and one for my individual achievements in computer science, marketing, and the intersection of the two fields in my year-and-a-half at NYU.<br></br>The purpose of the President’s Service Award is to recognize the distinguished achievements of students and student organizations for their promotion of learning, leadership, and quality of student life at New York University.<br></br>President's Service Awards are given to students or student organizations that have had an extraordinary and positive impact on the University community, including achievements within schools and departments, the University at large, local neighborhoods, and NYU's presence in the world."
}, {
    title: "Washington Square News Up & Comer",
    date: "March 23",
    year: 2017,
    type: "award",
    description: "Named as one of NYU's ten up-and-coming students for my work in computer science, marketing, and leadership at NYU."
}, {
    title: "YHack",
    subtitle: "Yale University",
    date: "November 11 – 13",
    year: 2016,
    type: "contest",
    description: "Created Metropolis, a program that turns hand-drawn 2D-sketches of rooms into immersive 3D VR experiences using inverse graphics, Monte-Carlo Markov chains, Unity, and a custom-built renderer."
}, {
    title: "Twitter",
    subtitle: "Software Engineering Intern",
    date: "June 13 – November 11",
    year: 2016,
    type: "job",
    description: "Worked on Twitter's Timeline Service team. Developed a tool to analyze and debug why posts were selected for injection into user timelines, as well as implementing general overall improvements to the Twitter timeline experience."
}, {
    title: "The Future of Listening Hackathon",
    subtitle: "Audible, Amazon, and the NYC Media Lab",
    date: "April 16",
    year: 2016,
    type: "contest",
    description: "Developed an algorithm that dynamically increased or decreased the length of the white space between words in an audiobook, preserving the fidelity of speech while increasing the speed at which the audiobook could be heard."
}, {
    title: "Violet Spotlight",
    subtitle: "New York University",
    date: "March 30",
    year: 2016,
    type: "award",
    description: "Featured as an NYU Violet Spotlight for my work in computer science at NYU. The Violet Spotlight program is used to showcase influential students at NYU and give them a platform to show their work."
}, {
    title: "HerCampus NYU Spotlight",
    date: "February 13",
    year: 2016,
    type: "award",
    description: "Interviewed by HerCampus NYU for my work in computer science and marketing at NYU."
}, {
    title: "Hack the Dinos",
    subtitle: "The American Museum of Natural History",
    date: "November 20 – 22",
    year: 2015,
    type: "contest",
    description: "Developed a VR game to help transcibe and classify historical documents, dig up fossils, and teach students more about paleontology. Also built a Dinosaur Ouija board last-minute for fun."
}, {
    title: "Vine",
    subtitle: "Software Engineering Intern",
    date: "October 19 – May 20, 2016",
    year: 2015,
    type: "job",
    description: "Worked on Twitter's Timeline Service team. Developed a tool to analyze and debug why posts were selected for injection into user timelines, as well as implementing general overall improvements to the Twitter timeline experience."
}, {
    title: "New York University",
    date: "August 30",
    year: 2015,
    type: "school",
    description: "Began studying computer science, economics, and business at New York University's College of Arts and Science.",
}, {
    title: "Phillips Academy",
    date: "June 7",
    year: 2015,
    type: "school",
    description: "Graduated from Phillips Academy, a private, co-ed boarding school and the oldest high school in the United States.",
}, {
    title: "picoCTF Cyber Security Contest",
    subtitle: "Carnegie Mellon University",
    date: "October 27 – November 7",
    year: 2014,
    type: "contest",
    description: "Received 64th place in the national 2014 Carnegie Mellon University picoCTF Hacking Contest, out of 3185 teams.",
}, {
    title: "Actifio",
    subtitle: "Software Engineering Intern",
    date: "June 9 – August 29",
    year: 2014,
    type: "job",
    description: "Maintained and improved Actifio's Android and iPhone mobile apps.",
}, {
    title: "St. Anselm Programming Contest",
    subtitle: "Saint Anselm College",
    date: "April 5",
    year: 2014,
    type: "contest",
    description: "Received third place in the Saint Anselm branch of the Saint Anselm Programming Contest 2014, fifth place overall.",
}, {
    title: "Actifio",
    subtitle: "Software Engineering Intern",
    date: "June 10 – August 23",
    year: 2013,
    type: "job",
    description: "Developed a mobile Android application for Actifio, a data backup company based in Waltham, MA.",
}, {
    title: "Individuate",
    subtitle: "Software Engineering Contractor",
    date: "May 26 – September 6",
    year: 2013,
    type: "job",
    description: "Developed a front-end UI using C# for Individuate, an Andover startup.",
}, {
    title: "picoCTF Cyber Security Contest",
    subtitle: "Carnegie Mellon University",
    date: "April 26 – May 6",
    year: 2013,
    type: "contest",
    description: "Received 40th place in the national 2013 Carnegie Mellon University picoCTF Hacking Contest, out of 1938 teams.",
}, {
    title: "St. Anselm Programming Contest",
    subtitle: "Saint Anselm College",
    date: "April 6",
    year: 2013,
    type: "contest",
    description: "Received first place in the Saint Anselm branch of the Saint Anselm Programming Contest 2013, third place overall.",
}, {
    title: "Phillips Academy",
    date: "September 10",
    year: 2011,
    type: "school",
    description: "Matriculated to Phillips Academy, a private, co-ed boarding school and the oldest high school in the United States.",
}, {
    title: "The Fenn School",
    date: "June 10",
    year: 2011,
    type: "school",
    description: "Graduated from the Fenn School, a 4th-through-9th grade all-male private middle school in Concord, MA.",
}, ];

$(document).ready(function() {
    years.forEach(function(year) {
        $(".timeline-centered")
            .append(
                '<li class="timeline-item period">' +
                '<div class="timeline-content">' +
                '<h2 class="timeline-title">' + year + '</h2>' +
                '</div>' +
                '</li>'
            );
        all_items.forEach(function(timeline_item) {
            if (timeline_item.year === year) {
                var type = "&#xf10c;";
                var icon = "";
                if (timeline_item.type === "award") {
                    var type = "&#xf006;";
                    var icon = " timeline-marker-star";
                }
                if (timeline_item.type === "contest") {
                    var type = "&#xf006;";
                    var icon = " timeline-marker-star";
                }
                
                $(".timeline-centered")
                    .append(
                        '<li class="timeline-item">'
                        + '<div class="timeline-info">'
                        + '<span>'
                        + timeline_item.date
                        + '</span>'
                        + '</div>'
                        + '<div class="timeline-marker' + icon + '">'
                        + type
                        + '</div>'
                        + '<div class="timeline-content">'
                        + '<h3 class="timeline-title">'
                        + timeline_item.title
                        + '</h3>'
                        + (timeline_item.subtitle ? '<h4 class="timeline-title">'
                        + timeline_item.subtitle
                        + '</h4>' : '')
                        + '<p>'
                        + timeline_item.description
                        + '</p>'
                        + '</div>'
                        + '</li>'
                        );
            }
        });
    });
});
