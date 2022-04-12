import { defineStore } from 'pinia';

export const useArticlesStore = defineStore({
  id: 'articles',
  state() {
    return {
   articles:[
       {
           theme:'Water',
           title:'About Water Projects',
           text:'Millions of African people are still deprived of the privilege of having access to water in their immediate environment. This lack forces millions of people, mostly women and children, to undertake a journey of several miles, sometimes twice a day, to the river or ground water hole. Often, they find that the water there is dirty, potentially bearing disease, parasites, and mosquitoes that carry  malaria. Then, they start the hours long journey back home—where they are exposed to danger and abuse—with an average of 40 pounds of water on their heads. The African continent faces the greatest challenge of any region of the world with roughly (330 million) people not using a clean water source. Eighty-four percent of these people live in rural areas. This represents an increase of 66 million people since 1990 who do not a clean water source.As water scarcity is forced towards the top of the political agenda, North African governments are investingin water desalination (desal) plants. The Algerian government is implementing a new emergency plan that will focus on seawater desal in its drinking supply. Tunisia is ramping up production of multi-million dollar facilities, and Egypt’s sovereign wealt',
           image:'news-water'
       },
       {
           theme:'Education',
           title:'Educational Centers',
           text:'Fund African schoold or sponsor a student today to increase community development To help achieve our mission in providing community development to African countries, we began with the initiative of focusing on education. We did this by building new educational centers, providing educational supplies to existing schools, and sponsoring students who can’t afford basic school supplies. Education is number one tool to help increase the development of communities. The United Nations Convention on the Rights of the Child defines achild as a human being below the age of 18 years unless under the law applicable to the child, majority is attained earlier. Children at birth take on the social and economic status of their parents and maybe subject to abuse if special care and attention is not given them. They are minors who are socialized through education, formal or informal. At birth every child by nature can be said to be a social animal that can only develop its personality through social interaction. Through social interaction, children are taught their cultural values and duties. In the same way, through education, children can be taught their fundamental rights. Not only do children come to learn their rights through education, education also guarantees the enjoyment of those rights.',
           image:'news-edu'
       },
       {
           theme:'Orphan',
           title:'Orphan Sponsorship',
           text:'Orphan is any child who lost his or her one or both parents. The reality to lose a parent is very harsh for a child, where the child feel most comfort and safe. Here at Africa Relief, we recognize this, therefore, we try to ease the pain for that orphan as much as we can, by at least insuring that basic needs for that orphan child is not missed and it is covered. Needs that Africa Relief consider basic and necessary are food, water, housing, education, health care, clothing. New home, new people and a brand new way of life after probably feeling the warmth of a parents love, and then nature snatches them away through death. How does it feel like growing, in need of a family, shelter and care? Nearly 140 million children are classified as orphans globally according to a 2015 United Nations International Children’s Emergency Fund (UNICEF) report. 95 percent of these children are over the age of five. 61 million in Asia, 52 million in Africa, 10 million in Latin America and the Caribbean, and 7.3 million in Eastern Europe and Central Asia. Africa’s 52 million alone, makes it a home to more than a quarter of orphans in the world. By projections, over 30 percent of Africa’s youth are orphans. Statistics on orphans include not only those who have lost both parents, but alsothose who’ve lost a father or a mother.',
           image:'news-orphan'
       },
       {
           theme:'Food',
           title:'Food Charity',
           text:'Rescue A Child Mission exists to stop child hunger & homeless point. It is one of the major priority based charities and serves those in need in Nigeria, and in 8 countries around Africa. It provides foodeducation, essentials and disaster relief. Domestically, it operates 6 distribution centers located in Abuja, Lagos, Jos, Anambara, Malawi and Cameron. Because school is the best way to help kids escap poverty, we help them attend and finish school by distributing backpacks to homeless children and offering free books and supplies to educators. Rescue A Child Mission continued its Summer Food & Education Program. The program combined Feed the Childrens logisticsand transportation experience with the support of donations. Rescue AChild Mission served approximately 1500 meals with the help of raised funds to children at 8 sites within the rural communities, and Tribal grassroots across. Rescue A Child Mission provided 500 backpacks andschool supplies and 300 books to children in the program. Rescue A Child Mission was even able to send groceries to hungry families on days when children could not reach the meal sites in person.',
           image:'news-food'
       },
       {
           theme:'Medicine',
           title:'Medical Volunteer',
           text:'When most people think about volunteering, they think about going to a foreign country and doing something they’ve never done before, like teaching English or helping expand school buildings. However, the need for medical volunteers exists almost everywhere around the globe. You have probably heard about long-term medical volunteer abroad projects such as Doctors Without Borders. However, there are also plenty ofvolunteer programs targeted towards medical professionals and students looking to serve in short-term projects ranging from just a few weeks to a few months. Although many countries have adequate health care for most of their populations, this access doesn’t always extend to the marginalized groups or other under-served populations. Of course, while these may be incredible projects that are of great use to acommunity, some volunteers don’t always consider that they may be able to play a different role as a specialized volunteer, like a medical orhealthcare volunteer.',
           image:'news-med'
       },
   ]
    };
  },
});
