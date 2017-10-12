FROM mongo:3.5

ENV AUTH yes
ENV STORAGE_ENGINE wiredTiger
ENV JOURNALING yes

COPY scripts/run.sh /run.sh
COPY scripts/set_mongodb_password.sh /set_mongodb_password.sh

CMD ["/run.sh"]
