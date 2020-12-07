OnlineExam:
===========

1. This project is mainly intended to develop a user interface that mimics the actual
   online test environment conducted by many testing agencies in India.

2. Here we have React as a medium of development with create-react-app as development tool.

3. This website is static, completely runs on clients browser, does'nt require any server
   side arrangements. At the same time exam evaluation is also done on client computer, to display 
   on spot end result.
4. As everything happens on client side care must be taken to encode and encrypt actual answer scripts
   before deployment to avoid malpractises.
5. Time bound is not yet provided.


Program:
========

Different Components used:
--------------------------

1. Card : To hold the Title, Logo and 'Link' for main exam.

2. Exam : This component responsible for complete conduction of exam and even holds user answer data.
	  Different components used as part of Exam

	a) QuePal : Question Pallette which contains button components from which we navigate among 
		    different questions in Exam.
			i)PalCom: Each button in pallete is a link to a question which will be displayed
				  on the Exam Area. Button also changes its apperance based on question state.
				  Question: I) Not Visited: Normal Button
					    II) Visited but not answered: Red Background
					    III) Answered: Green background
	b)ExAr: Exam Area, Actually Question area where each question is displayed and a input(radio) is 
		provided to record the answer.
			i)Clear Response: If the question is already answered, then its response will be
					  cleared(option deselected) and state of question changes.
			ii)SaveNext: This component gives the question answered state and record the user
					response. If already an answer exists, it will be overriden.
	c)Submit: This component ends the exam sending recorded answers for the evaluation component.

3. Eval: The last stage of exam. Answer script in web directory(static-already deployed) will be retrieved 
	 through AJAX and recorded answers evaluated against Answer script. Marks obtaned and optional
	 detailed analysis will be displayed.    

Note: At present This version supports only multiplechoice single option questions.
