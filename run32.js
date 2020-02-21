#PBS -N Work32P
#PBS -l nodes=2:ppn=16
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
mpirun -np 32 ./project1 hard_sample.dat sol_hard.32 >& results.32p
