#PBS -N Work16P
#PBS -l nodes=1:ppn=16
#PBS -l walltime=0:20:00
#PBS -q q160p48h@scout
#PBS -A 193000-990017
#PBS -o /dev/null
#PBS -e /dev/null
#PBS -r n
#PBS -V
cd $PBS_O_WORKDIR
module load openmpi
#ulimit -c 0
mpirun -np 16 ./project1 hard_sample.dat sol_hard.16 >& results.16p
