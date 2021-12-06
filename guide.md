---
layout: page
title: Howto
permalink: /guide/
---

# How to describe your course or research group in the SIGHI-Italy repository.

The [SIGCHI-Italy](http://sigchitaly.eu/) is maintaining a list of HCI courses and research groups in Italy. 
You can propose to add your own through a pull request to the SIGCHI-Italy repository. You can also request some changes to the existing content following the same procedure. 

For completing the guide, you will be needing a [GitHub account](https://github.com).


## Step 1: Fork the SIGCHI-Italy repository
* Log-in using your [GitHub account](https://github.com)
* Fork the [SIGCHI-Italy repository]( https://github.com/davidespano/sigchi-italy). This will create your personal copy of the repository. If you already sent content in the past, you can reuse the existing one and skip this point. 

![fork](/images/guide/imagefork.png)

## Step 2: Create a new branch for the request

Create a new branch in your copy of the repository, as shown in the following image.

![branch](/images/guide/imagebranch.png)

 1. Click on *main* (red box)
 2. Enter a *branch name* (orange box). In order to help us with the management, please name the branch as follows 
    * `[institute acronym]-[course acronym]` for courses (e.g., unisa-ium) for courses
    * `[institute acronym]-[group acronym]` for research groups (e.g., unica-cg3hci).
 3. Finally, click on `Create Branch`(blue box).  

In this way, you have created a new branch in your copy of the project.

## Step 3: Create or Edit the content
Before proceeding, please double-check that you are modifying the branch created at Step 2. 

### Propose new content
If you are proposing a new course or research group, please complete the following steps: 

1. Go to the `_courses`  if you are proposing a course. Instead, if you are proposing a research group, go to the `_research_groups`folder.
   
2. Click on `Add file`, then `Create new file`. 

![newfile](/images/guide/newfile.png)

3. Create a file named 
   * `[institute acronym]-[course acronym]/description.md` for the new course.
   * `[institute acronym]-[group acronym]` for the new research groups.
    

![newcourse](/images/guide/insertnewcourse.png)


4. Copy & Paste the content of an existing course or research group description and adapt it to your needs. 
   * Sample course : [UniCA-IUM](https://github.com/davidespano/sigchi-italy/blob/main/_courses/unica-ium/description.md)
   * Sample research group: [UniCA-CG3HCI](https://github.com/davidespano/sigchi-italy/blob/main/_research_groups/cg3hci/description.md)

5. The resulting file must contain a structured data section (between the two `---`), and the content written in [Markdown syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

6. (Optional) Upload assets files (e.g., logos, member pictures) inside the `[institute acronym]-[course acronym]` or `[institute acronym]-[group acronym]` folder. You can refer them using relative URLs inside the Markdown content. 

### Modify existing content
In this case the procedure is simpler. Change the existing content through the GitHub editor and proceed to the next step. 

## Step 4: Commit the changes in your repository copy
1. (Optional, but recommended) Add a small summary of the new or changed content you are proposing. 
2. Commit to your repository by clicking the `Commit new file` button. If you are requesting changes to existing content, press the `Commit` button.

![commit](/images/guide/commit.png)

## Step 5: Send the pull request to the original project.

1. Click on `Pull Requests`;
![pull1](/images/guide/pullStep1.png)

2. Then, click the `Compare & pull request` button;
![pull2](/images/guide/pullStep2.png)

3. Finally, click the `Create pull request` button.
![pull3](/images/guide/imagepullStep3.png)


## That's all, folks!
Congratulations, you completed the pull request process!  Once accepted, the new content or the updates will published in the website. In case you will need to change it, you can send another pull request. 


