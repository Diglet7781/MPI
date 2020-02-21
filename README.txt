First you will need to login to the HPCC computer systems.  All
systems from outside of the HPCC need to be accessed through the titan
server using ssh.  To begin use an ssh client to login to
titan.hpc.msstate.edu with your netid as your userid.  The initial
password for your class account will be given in class. Before you log
in you will need to set up two factor authentication using the Duo app
which you need to setup at the site https://taps.hpc.msstate.edu.

After login to titan.hpc.msstate.edu, then you can copy the project 
files to titan using the command

wget http://web.cse.msstate.edu/~luke/Courses/sp20/CSE4163/project1.tar

Then login to the scout cluster using the command

ssh -Y scout-login

Before you use the scout-login system for the first time you will need
to edit your .bashrc file to tell the system to load in the version of
MPI that we will be using as well as the PBS job scheduling system:

Add the module load line  listed below before the 
"if [ -z $PS1 ];then return; fi" line in your .bashrc file:

------------------------------------------------------------------------------
module load openmpi pbs
------------------------------------------------------------------------------

You can use the editors vi, nano, or emacs to perform this editing. 

*   nano is the easiest editor to use for the uninitiated.

Now you will need to copy the project1.tar file to scout-login (you only need
to do this once).  To copy this you can use the command

scp titan:project1.tar .

This will copy the file from titan to your home directory.

To unpack this file just use the command:

tar xvf project1.tar


You will now have a directory called 'project1' that will contain the starting
source code for your project.  Enter the directory using the command 
'cd project1'


Then you can compile using the command "make" in the project directory.

This directory contains several program files:

game.h:      This file defines a structs that is used in solving a puzzle
game.cc:     Implementation of methods defined in game.h
utilities.h: Define utility routines that will measure time and kill runaway
             jobs.
utilities.cc:Implementation of utility routines
main.cc:     Program main and implementation of server and client code.

easy_sample.dat:  A sample of puzzles that are computationally easy to solve
                  (to be used for debugging program)
hard_sample.dat:  A sample of puzzles that are computationally hard to solve
                  (to be used for measuring program performance)

debug0?.js:  A selection of job scripts for debugging runs on the
             parallel cluster

run??.js:    A selection of job scripts for performance runs on the
             parallel cluster
-----------------------------------------------------------------------------

How to submit jobs to the parallel cluster using the PBS batch queuing system:

To submit a job once the program has been compiled use one of the
provided PBS job scripts (these end in .js).  These job scripts have
been provided to run parallel jobs on the cluster.  To submit a job use 
the "qsub" command. (note:  "man qsub" to get detailed information on this 
command)

example:
qsub debug01.js

To see the status of jobs on the queue, use qstat.  Example:

scout-login[229]% qstat
Job id           Name             User             Time Use S Queue
---------------- ---------------- ---------------- -------- - -----
50174            Work01P          lush                   0 R q160p48h


This lists information associated with the job.  The important things to note
are the Job id and the state (S).  The state tells the status of the job.  
Generally the status will be one of three values:  Q - queued waiting for 
available processors, R - running, E - exiting.

Additionally, if you decide that you don't want to run a job, or it seems to
not work as expected, you can run "qdel Job id" to delete it from the queue.
For example, to remove the above job from the queue enter the command

qdel 50174.scout
