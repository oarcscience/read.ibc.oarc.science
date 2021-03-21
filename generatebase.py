import pandas as pd
import glob
foutstring="filename,ls,lscum,firsts,content\n"
for f in glob.glob("_data/sources getbible-net/*.txt"):
    print("Working with file {} ...".format(f))
    df=pd.read_csv(f ,sep="\|\|", engine="python", header=None)
    df.columns=["book","chapter","verse","content"]
    ls="¤".join(map(str,list(df[["book","chapter"]].groupby("book").agg(set)["chapter"].apply(len))))
    lscum="¤".join(map(str,[0]+list(df[["book","chapter"]].groupby("book").agg(set)["chapter"].apply(len).cumsum())))
    firsts="¤".join(map(str,list(df[df["verse"]==1].index)+[df.shape[0]]))
    content="".join(df.apply(lambda x: '◊{}||{}||{} {}◊¤ '.format(x["book"],x["chapter"],x["verse"],x["content"]),axis=1))
    foutstring+="{},{},{},{},{}\n".format(f.split("/")[-1],ls,lscum,firsts,content.replace(",","¤"))
    print("Done.")
print("Writing down the final file...")
with open("_data/globalbase.csv", "w") as fout:
    fout.write(foutstring)
print("Done.")
