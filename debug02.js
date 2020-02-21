#PBS -N Debug02P
#PBS -l nodes=1:ppn=2
#PBS -l walltime=0:02:00
#PBS -q q160p48h@scout
#!PBS -A 193000-990017
#PBS -o /dev/null
#PBS -e /dev/null
#PBS -r n
#PBS -V
cd $PBS_O_WORKDIR
module load openmpi
#ulimit -c 0
mpirun -np 2 ./project1 easy_sample.dat sol_easy.02 >& out.02p


